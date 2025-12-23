
import React, { useState, useCallback, useEffect } from 'react';
import { SLIDES } from '../constants';
import { SlideGroup } from '../types';

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastAction, setLastAction] = useState<'next' | 'prev'>('next');

  const nextSlide = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    setLastAction('next');
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    setLastAction('prev');
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        if (event.key === 'ArrowLeft') {
          prevSlide();
        } else if (event.key === 'ArrowRight') {
          nextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlideContent = (slide: SlideGroup, isDesktop: boolean) => {
    if (isDesktop) {
      if (slide.type === 'fullscreen') {
        return (
          <div className="flex w-full h-full">
            <div className="w-1/2 h-full bg-center bg-cover" style={{ backgroundImage: `url(${slide.images[0]})` }} />
            <div className="w-1/2 h-full bg-center bg-cover border-l border-white" style={{ backgroundImage: `url(${slide.images[1]})` }} />
          </div>
        );
      }

      const spacingClass = slide.type === 'triple' ? 'space-x-[2vw]' : 'space-x-[4vw]';
      const containerSizeClass = slide.type === 'triple' ? 'h-[80vh] w-[90vw]' : 'h-[75vh] w-[85vw]';

      return (
        <div className={`flex items-center justify-center ${spacingClass} ${containerSizeClass}`}>
          {slide.images.map((img, idx) => (
            <div key={idx} className="flex-1 h-full flex items-center justify-center">
              <img src={img} alt="" className="max-h-full max-w-full object-contain pointer-events-none select-none" />
            </div>
          ))}
        </div>
      );
    } else {
      const mainImg = slide.images[slide.mainIndex] || slide.images[0];
      if (slide.type === 'fullscreen') {
        return (
          <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${mainImg})` }} />
        );
      }
      return (
        <div className="flex items-center justify-center h-[70vh] w-full px-6">
          <img src={mainImg} alt="" className="max-h-full max-w-full object-contain pointer-events-none select-none" />
        </div>
      );
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white select-none">
      {/* Slides Container */}
      <div className="absolute inset-0 pointer-events-none">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          let transformClass = 'translate-x-0';
          let opacityClass = 'opacity-100 z-10';

          if (!isActive) {
            opacityClass = 'opacity-0 z-0';
            if (lastAction === 'next') {
              transformClass = index < currentIndex ? '-translate-x-full' : 'translate-x-full';
            } else {
              transformClass = index < currentIndex ? '-translate-x-full' : 'translate-x-full';
            }
          }

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center slide-transition transform ${transformClass} ${opacityClass}`}
            >
              <div className="hidden md:flex w-full h-full items-center justify-center">
                {renderSlideContent(slide, true)}
              </div>
              <div className="flex md:hidden w-full h-full items-center justify-center">
                {renderSlideContent(slide, false)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Overlays - Higher Z-Index to ensure it's on top */}
      <div className="absolute inset-0 flex z-[40]">
        {/* Previous Zone: 20% width on Desktop, 50% on Mobile */}
        <div 
          onClick={prevSlide}
          className="h-full cursor-prev w-[50%] md:w-[20%] bg-transparent"
          aria-label="Previous Slide"
        />
        {/* Next Zone: 80% width on Desktop, 50% on Mobile */}
        <div 
          onClick={nextSlide}
          className="h-full cursor-next w-[50%] md:w-[80%] bg-transparent"
          aria-label="Next Slide"
        />
      </div>
    </div>
  );
};

export default Slideshow;
