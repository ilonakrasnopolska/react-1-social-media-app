import React from "react";
import Modal from "../../../../../common/Modal/Modal";
import Classes from "./ModalSignOut.module.css";

const ModalSignOut = ({
  isOpen,
  closeModal,
  onConfirmOut,
  t,
}) => {
  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <div className={Classes.wrapper}>
        <h2>
          {t
            ? t("AskIfOut")
            : "Are you sure you want to sign out?"}
        </h2>

        <div>
          <button onClick={onConfirmOut} className={Classes.button}>
            {t ? t("SignOut") : "Sign Out"}
          </button>
          <button onClick={closeModal} className={Classes.button}>
            {t ? t("Cancel") : "Cancel"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSignOut;
