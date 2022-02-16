import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.js';
import s from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({images}) { 
  return (
    <ul className={s.ImageGallery}>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ul>
  )
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired
};
