import { FC } from 'react';

import { Image } from '.';
import { Image as ImageType } from '../types';

interface GalleryProps {
  query: string;
  images: ImageType[];
  classes?: string;
}

const getHeaderText = (query: string, hasImages: boolean) => {
  return hasImages ? (
    <span className="capitalize">{query} Pictures</span>
  ) : (
    `There are no images for "${query}"`
  );
};

const Gallery: FC<GalleryProps> = ({ query, images, classes }) => (
  <div className={`text-center ${classes}`}>
    <h2 className="text-lg pb-4">{getHeaderText(query, images.length > 0)}</h2>
    <div className="flex flex-wrap justify-center">
      {images.map(({ src, title }) => (
        <Image src={src} title={title} key={src} />
      ))}
    </div>
  </div>
);

export default Gallery;
