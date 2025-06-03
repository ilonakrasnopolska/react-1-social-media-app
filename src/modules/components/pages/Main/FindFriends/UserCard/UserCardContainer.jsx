import React from "react";
import useMessageModal from "../../../../../hooks/useMessageModal";
import { useFollowToggle } from "../../../../../hooks/useFollowToggle";
import { updateNewMessageText } from "../../../../../../redux/DialogsReducer/dialogs-reducer";
import UserMessageModal from "./UserMessageModal";
import UserCard from "./UserCard";

// Контейнер для карточки пользователя
const UserCardContainer = ({ friend, t }) => {
  // Хук для подписки и отписки
  const toggleFollow = useFollowToggle();
  const {
    isModalOpen,
    openModal,
    closeModal,
    newMessageText,
    useTextChangeHandlers,
    handleKeyDown,
    handleSendMessageAndCloseModal
  } = useMessageModal(updateNewMessageText, friend);

  return (
    <>
      <UserCard
        friend={friend}
        t={t}
        handleFollowToggle={toggleFollow}
        openModal={openModal}
      />
      <UserMessageModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        friend={friend}
        newMessageText={newMessageText}
        onChange={useTextChangeHandlers}
        onKeyDown={handleKeyDown}
        onSend={(e) => {
          e.preventDefault();
          handleSendMessageAndCloseModal(newMessageText, friend, closeModal);
        }}
        t={t}
      />
    </>
  );
};

export default UserCardContainer;
