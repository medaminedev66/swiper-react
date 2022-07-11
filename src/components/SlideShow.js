import React, { useEffect, useState } from 'react';
import ImagesList from './ImagesList';

function SlideShow() {
  const [startPosition, setStartPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setImages(data.slice(0, 6)));
  }, []);

  const next = () => {
    currentSlide === images.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const prev = () => {
    currentSlide === 0
      ? setCurrentSlide(images.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const onTouchStart = (e) => {
    setStartPosition(e.changedTouches[0].pageX);
  };

  const onTouchMove = (e) => {
    setCurrentPosition(e.changedTouches[0].pageX);
  };

  const onTouchEnd = () => {
    startPosition - currentPosition < 0 ? prev() : next();
  };

  return (
    <div className="slide-show">
      <ImagesList
        imgs={images}
        setImage={setCurrentSlide}
        index={currentSlide}
      />
      <div className="slide-container">
        <button type="button" className="action-btn" onClick={prev}>
          prev
        </button>
        <div className="image-container">
          <div
            className="image-container-inner"
            style={{ transform: `translateX(${-currentSlide * 100}%)` }}
          >
            {images.map((image, ind) => (
              <div className="the-image">
                <img
                  key={`slider-${image.id}`}
                  className="image"
                  src={image.url}
                  alt={image.title}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                />
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="action-btn" onClick={next}>
          next
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
