import React from 'react';
import PropTypes from 'prop-types';

function ImagesList(props) {
  const { imgs, setImage, index } = props;

  return (
    <div className="images-list">
      {imgs.map((image, indx) => (  
        <div key={image.id} className="image-icon">
          <img
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

ImagesList.propTypes = {
  imgs: PropTypes.array.isRequired,
  setImage: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ImagesList;
