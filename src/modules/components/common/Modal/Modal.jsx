import React, { useEffect } from "react";
import Classes from "./Modal.module.css";

import ReactDOM from "react-dom";

const Modal = ({ isOpen, close, children }) => {
  // ...
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={Classes.modal_overlay} onClick={close}>
      <div className={Classes.modal_content} onClick={(e) => e.stopPropagation()}>
        <button className={Classes.close_button} onClick={close}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("root")
  );
};


export default Modal;
