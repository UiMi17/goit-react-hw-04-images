import PropTypes from 'prop-types';
import {
  StyledSearchbar,
  StyledForm,
  StyledButton,
  StyledInput,
} from './StyledSearchbar';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <StyledForm onSubmit={onSubmit}>
        <StyledButton type="submit">
          <span>Search</span>
        </StyledButton>

        <StyledInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
