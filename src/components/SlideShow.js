import React, { useEffect, useState } from 'react';
import ImagesList from './ImagesList';

function SlideShow() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
  ]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setImages(data.slice(0,6)));
    console.log(images);
  }, []);

  const next = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prev = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  };

  return (
    <>
      <ImagesList imgs={images} setImage={setIndex} index={index} />
      <div className="slide-images">
        <button onClick={prev}>prev</button>
        <img className="image" src={images[index].url} alt="" />
        <button onClick={next}>next</button>
      </div>
    </>
  );
}

export default SlideShow;
