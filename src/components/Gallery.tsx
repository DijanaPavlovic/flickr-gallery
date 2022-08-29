import { FC } from 'react';

import { Image } from '.';
import { Image as ImageType } from '../types';

interface GalleryProps {
  query: string;
  images: ImageType[];
  classes?: string;
}

const List: FC<GalleryProps> = ({ query, images, classes }) => (
  <div className={`text-center ${classes}`}>
    <h2 className="capitalize text-lg pb-4">{`${query} Pictures`}</h2>
    <div className="flex flex-wrap justify-center">
      {images.map(({ src, title }) => (
        <Image src={src} title={title} key={src} />
      ))}
    </div>
  </div>
);

export default List;
