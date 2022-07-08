import React from 'react';

function ImagesList(props) {
  const { imgs, setImage, index } = props;

  return (
    <div className="images-list">
      {imgs.map((image, indx) => (
        <div className="image-icon">
          <img
            key={image.id}
            src={image.thumbnailUrl}
            onClick={() => setImage(indx)}
            className={indx === index ? 'active' : 'inactive'}
            alt={image.title}
          />
          <p>{image.title.split(' ')[0]}</p>
        </div>
      ))}
    </div>
  );
}

export default ImagesList;
