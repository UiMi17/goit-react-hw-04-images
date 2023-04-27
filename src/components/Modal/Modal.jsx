import PropTypes from 'prop-types';
import { StyledOverlay, StyledModal } from './StyledModal';
import { useEffect } from 'react';

export const Modal = ({ image, handleModalClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleModalClose);

    return () => {
      window.removeEventListener('keydown', handleModalClose);
    };
  }, [handleModalClose]);

  return (
    <StyledOverlay onClick={handleModalClose}>
      <StyledModal>
        <img
          src={image.largeImageURL}
          alt={image.tags}
          width="800"
          height="600"
        />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  handleModalClose: PropTypes.func.isRequired,
};
