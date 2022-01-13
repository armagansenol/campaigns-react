import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}

const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, modalContent }) => {
  const modal = (
    <React.Fragment>
      <div className="modal" onClick={hide}>
        <div onClick={(event) => event.stopPropagation()}>{modalContent}</div>
      </div>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
