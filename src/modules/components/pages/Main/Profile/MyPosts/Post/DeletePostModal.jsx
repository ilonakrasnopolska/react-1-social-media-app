import React from "react";
import Modal from "../../../../../common/Modal/Modal";
import Classes from "../Post/DeletePostModal.module.css"

const DeletePostModal = ({
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
            ? t("AskIfDeletePost")
            : "Are you sure you want to delete this post?"}
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

export default DeletePostModal;
