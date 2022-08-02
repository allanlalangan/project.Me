import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const ModalBackdrop = (props) => {
  return (
    <div component='div' sx={styles.backdrop} onClick={props.onClick}></div>
  );
};

const ModalWindow = (props) => {
  return (
    <div component='section' sx={styles.window}>
      {props.children}
    </div>
  );
};

const portalToElement = document.getElementById('modal');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={props.onBackdropClick} />,
        portalToElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalToElement
      )}
    </>
  );
};

export default Modal;
