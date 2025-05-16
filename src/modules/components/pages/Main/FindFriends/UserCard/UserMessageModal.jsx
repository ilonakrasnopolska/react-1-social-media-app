import React from "react";
import Avatar from "../../../../common/Avatar";
import Modal from "../../../../common/Modal/Modal";

const UserMessageModal = ({
  isOpen,
  closeModal,
  friend,
  newMessageText,
  onChange,
  onKeyDown,
  onSend,
  t,
}) => {
  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <div>
        <Avatar src={friend.avatar} alt="Avatar" />
        <h2>{friend.name}</h2>
      </div>
      <textarea
        name="message"
        value={newMessageText}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={t("TypeMessage")}
        rows="5"
        style={{ width: "100%" }}
      />
      <button onClick={onSend} disabled={newMessageText.trim() === ""}>
        {t('Send')}
      </button>
    </Modal>
  );
};

export default UserMessageModal;
