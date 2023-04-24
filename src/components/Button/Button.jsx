import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton';

export const Button = ({ handleLoadMoreBtnClick }) => {
  return (
    <StyledButton type="button" onClick={handleLoadMoreBtnClick}>
      Load more
    </StyledButton>
  );
};

Button.propTypes = {
  handleLoadMoreBtnClick: PropTypes.func.isRequired,
};
