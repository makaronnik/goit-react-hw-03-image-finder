import PropTypes from 'prop-types';
import ModalStyled from './ModalStyled';

const Modal = props => {
  return (
    <ModalStyled>
      <div className="modal"></div>
    </ModalStyled>
  );
};

Modal.propTypes = {};

export default Modal;
