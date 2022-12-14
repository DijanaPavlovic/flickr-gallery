// @ts-nocheck

import { FC } from 'react';

import { FixedSizeList as List } from 'react-window';

import { Image } from '.';
import { Image as ImageType } from '../types';

interface GalleryProps {
  query: string;
  images: ImageType[][];
  classes?: string;
}

const getHeaderText = (query: string, hasImages: boolean) => {
  return hasImages ? (
    <span className="capitalize">{query} Pictures</span>
  ) : (
    `There are no images for "${query}"`
  );
};

const Row = ({ data, index, style }: { data: ImageType[][]; index: number; style: unknown }) => (
  <div className="flex justify-center h-48" key={`${index}-${data[index][0].src}`} style={style}>
    {data[index].map(({ src, title }) => (
      <Image src={src} title={title} key={src} />
    ))}
  </div>
);

const Gallery: FC<GalleryProps> = ({ query, images, classes }) => (
  <main className={`text-center ${classes}`}>
    <h2 className="text-lg pb-4">{getHeaderText(query, images.length > 0)}</h2>
    {images.length > 0 && (
      <List height={750} itemCount={images.length} itemSize={192} width={960} itemData={images}>
        {Row}
      </List>
    )}
  </main>
);

export default Gallery;
