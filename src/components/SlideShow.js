import React, { useEffect, useState } from 'react';
import ImagesList from './ImagesList';

function SlideShow() {
  const [index, setIndex] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setImages(data.slice(0, 6)));
  }, []);

  const next = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
    setIndex(index + 1);
  };

  const prev = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  };

  const onTouchStart = (e) => {
    setStartPosition(e.changedTouches[0].pageX);
  };

  const onTouchMove = (e) => {
    setCurrentPosition(e.changedTouches[0].pageX);
  };

  const onTouchEnd = () => {
    startPosition - currentPosition > 0 ? prev() : next();
  };

  return (
    <div className="slide-show">
      <ImagesList imgs={images} setImage={setIndex} index={index} />
      <div className="slide-container">
        <button type="button" className="action-btn" onClick={prev}>
          prev
        </button>
        <div className="image-container">
          {images.map((image, ind) => (
              <img
                key={`slider-${image.id}`}
                className={`image ${ind === index ? 'shown' : 'hidden'}`}
                src={image.url}
                alt={image.title}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
            ))}
        </div>
        <button type="button" className="action-btn" onClick={next}>
          next
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
