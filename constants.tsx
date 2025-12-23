
import React from 'react';
import { SlideGroup, Client } from './types';

export const SLIDES: SlideGroup[] = [
  {
    id: '1',
    type: 'double',
    images: [
      '/images/BB-CREATIVE_4075 copy.jpg',
      '/images/BB-CREATIVE_4075.jpg'
    ],
    mainIndex: 1
  },
  {
    id: '2',
    type: 'triple',
    images: [
      '/images/BB-CREATIVE_4105.jpg',
      '/images/BB-CREATIVE_RED_3806.jpg',
      '/images/HOPE-SS24-43279856-CRISS-JEANS-PALE-BLUE-VINTAGE-Female_2033.jpg'
    ],
    mainIndex: 1
  },
  {
    id: '3',
    type: 'fullscreen',
    images: [
      '/images/HOPE-SS24-43441099-SECRET-TOP-DOVE-GREY_0204.jpg',
      '/images/Singular_perfume-multi.jpg'
    ],
    mainIndex: 0
  },
  {
    id: '4',
    type: 'double',
    images: [
      '/images/Singular_perfume-single.jpg',
      '/images/stilleben.jpg'
    ],
    mainIndex: 0
  }
];

export const CLIENTS: Client[] = [
  { name: 'Björn Borg' },
  { name: 'Polarn O. Pyret' },
  { name: 'Singular Society' },
  { name: 'Main Rose' },
  { name: 'Sophia Bernadotte' },
  { name: 'Eytys' },
  { name: 'Röhnisch Sportswear' },
  { name: 'Gustavsberg Porslin' },
  { name: 'Astrid Wild' },
  { name: 'Daily Sports' },
  { name: 'Blugiallo' },
  { name: 'Paula Beachwear' },
  { name: 'Hope' },
  { name: 'True Religion' }
];

export const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
