import { useEffect, useState } from 'react';

import axios from 'axios';

import { Header, Gallery } from './components';
import { Image, FlickrImage } from './types';
import { apiKey } from './config';

const getImages = (query: string) =>
  axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=80&format=json&nojsoncallback=1`,
  );

const App = () => {
  const [query, setQuery] = useState('mountain');
  const [images, setImages] = useState<Image[][]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(false);

  useEffect(() => {
    const updateImages = async () => {
      setLoading(true);

      try {
        const images: Image[][] = [];

        const response: FlickrImage[] = (await getImages(query)).data.photos.photo;
        response.forEach(({ farm, server, id, secret, title }, index) => {
          const indexInNewList = Math.floor(index / 4);
          const item = {
            src: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`,
            title,
          };

          if (images[indexInNewList]) images[indexInNewList].push(item);
          else images[indexInNewList] = [item];
        });

        if (err) setError(false);
        setLoading(false);
        setImages(images);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    updateImages();
  }, [query]);

  return (
    <div className="p-6 pt-10 flex flex-col items-center">
      <Header onSearch={setQuery} />
      {err && <p>An error has occurred, try again...</p>}
      {!err && loading && <p>Loading . . .</p>}
      {!err && !loading && <Gallery query={query} images={images} classes="max-w-5xl" />}
    </div>
  );
};

export default App;
