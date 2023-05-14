import PropTypes from 'prop-types';
import ModalStyled from './ModalStyled';

const Modal = ({ image: { largeImageURL, tags }, toggleModal }) => {
  const handleClick = e => {
    if (e.target.nodeName !== 'IMG') {
      toggleModal(null);
    }
  };

  return (
    <ModalStyled onClick={handleClick}>
      <div className="modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </ModalStyled>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
