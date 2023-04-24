import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledOverlay, StyledModal } from './StyledModal';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.handleModalClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleModalClose);
  }
  render() {
    const { image, handleModalClose } = this.props;

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
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  handleModalClose: PropTypes.func.isRequired,
};
