import React from 'react';
import PropTypes from 'prop-types';

function ImagesList(props) {
  const { imgs, setImage, index } = props;

  return (
    <ul className="images-list">
      {imgs.map((image, indx) => (  
        <li key={image.id} className="image-icon">
          <img
            src={image.thumbnailUrl}
            onClick={() => setImage(indx)}
            className={indx === index ? 'active' : 'inactive'}
            alt={image.title}
          />
          <p>{image.title.split(' ')[0]}</p>
        </li>
      ))}
    </ul>
  );
}

ImagesList.propTypes = {
  imgs: PropTypes.array.isRequired,
  setImage: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ImagesList;
