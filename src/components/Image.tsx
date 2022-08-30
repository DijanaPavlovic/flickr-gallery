import { FC } from 'react';

interface ImageProps {
  src: string;
  title: string;
}

const Image: FC<ImageProps> = ({ src, title }) => (
  <div className="overflow-hidden my-1.5 mx-2 grow md:w-60 rounded-md">
    <img
      src={src}
      alt={title}
      className="rounded-md drop-shadow-md h-full w-full transition-all duration-500 ease-in-out transform hover:scale-125 hover:cursor-pointer"
    ></img>
  </div>
);

export default Image;
