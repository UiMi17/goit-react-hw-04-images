import PropTypes from 'prop-types';
import { StyledImageGalleryItem, StyledImage } from './StyledImageGalleryItem';

export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledImageGalleryItem
      onClick={() => image.handleModalOpen(image.largeImageURL, image.tags)}
    >
      <StyledImage src={image.webformatURL} />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    handleModalOpen: PropTypes.func.isRequired,
  }),
};
