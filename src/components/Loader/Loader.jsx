import PropTypes from 'prop-types';
import { ThreeDots } from 'svg-loaders-react';
import LoaderStyled from './LoaderStyled';

const Loader = props => {
  return (
    <LoaderStyled>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#f44075"
        ariaLabel="three-dots-loading"
      />
    </LoaderStyled>
  );
};

Loader.propTypes = {};

export default Loader;
