
import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[calc(100vh-8rem)]">
        
        {/* Contact Info */}
        <div className="px-6 md:px-12 flex flex-col justify-start md:pt-12 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl leading-tight mb-12">
            Don’t be a stranger
          </h2>
          
          <div className="space-y-6 text-sm md:text-base tracking-wide">
            <div>
              <a href="mailto:contact@dunderstudios.com" className="hover:opacity-60 transition-opacity underline underline-offset-4">
                contact@dunderstudios.com
              </a>
              <p className="mt-1">+46 733 370 81 00</p>
            </div>
            
            <div className="pt-4">
              <p>Olivecronas väg 8</p>
              <p>113 61 Stockholm</p>
              <p>Sweden</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[60vh] md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=1200" 
            alt="Product Photography Example"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
