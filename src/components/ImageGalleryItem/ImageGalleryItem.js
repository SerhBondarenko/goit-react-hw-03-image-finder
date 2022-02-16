import React, { Component } from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { largeImageURL, tags, webformatURL } = this.props;
    return (
      <li className={s.ImageGalleryItem} onClick={this.toggleModal}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt="tags"
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags}></img>
          </Modal>
        )}
      </li>
    );
  }
};
