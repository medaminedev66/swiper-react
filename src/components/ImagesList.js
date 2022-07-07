import React from 'react';

function ImagesList(props) {
  const { imgs, setImage, index } = props;

  return (
    <div className="images-list">
      {imgs.map((image, indx) => (
        <img
          key={image.id}
          src={image.thumbnailUrl}
          onClick={() => setImage(indx)}
          className={indx === index ? 'active' : 'inactive'}
          alt=""
        />
      ))}
    </div>
  );
}

export default ImagesList;
