import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './StyledImageGallery';

export const ImageGallery = ({ images, handleModalOpen }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            image={{ webformatURL, handleModalOpen, largeImageURL, tags }}
          />
        );
      })}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
  handleModalOpen: PropTypes.func.isRequired,
};
