import React from "react";
import Modal from "../../../../../../common/Modal/Modal";
import Classes from "../ChatBubbleContainer/DeleteMessageModal.module.css";

const DeleteMessageModal = ({
  isOpen,
  closeModal,
  onConfirmDelete,
  t,
}) => {
  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <div className={Classes.wrapper}>
        <h2>
          {t
            ? t("AskIfDelete")
            : "Are you sure you want to delete the message?"}
        </h2>

        <div>
          <button onClick={onConfirmDelete} className={Classes.button}>
            {t ? t("Delete") : "Delete"}
          </button>
          <button onClick={closeModal} className={Classes.button}>
            {t ? t("Cancel") : "Cancel"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteMessageModal;
