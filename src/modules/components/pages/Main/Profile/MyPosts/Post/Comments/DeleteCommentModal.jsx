import React from "react";
import Modal from "../../../../../../common/Modal/Modal";
import Classes from "../Comments/DeleteCommentModal.module.css";

const DeleteCommentModal = ({ isOpen, closeModal, onConfirmDelete, t }) => {
  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <div className={Classes.wrapper}>
        <h3>{t("DeleteCommentQuestion")}</h3>
        <div>
          <button className={Classes.button} onClick={onConfirmDelete}>
            {t("Delete")}
          </button>
          <button className={Classes.button} onClick={closeModal}>
            {t("Cancel")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCommentModal;
