
export type SlideType = 'double' | 'triple' | 'fullscreen';

export interface SlideGroup {
  id: string;
  type: SlideType;
  images: string[];
  mainIndex: number; // For mobile: which image to show
}

export interface Client {
  name: string;
}
