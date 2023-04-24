import { ProgressBar } from 'react-loader-spinner';
import { StyledLoader } from './StyledLoader';

export const Loader = () => {
  return (
    <StyledLoader>
      <ProgressBar
        height="320"
        width="280"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </StyledLoader>
  );
};
