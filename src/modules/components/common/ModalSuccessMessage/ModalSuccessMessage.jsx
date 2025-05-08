import React from "react";
import Classes from "./ModalSuccessMessage.module.css";

const ModalSuccessMessage = ({ show, t }) => {
  if (!show) return null;

  return (
    <div className={Classes.modalBackdrop}>
      <div className={Classes.modal}>
        <p>{t("Send")}</p>
      </div>
    </div>
  );
};

export default ModalSuccessMessage;
