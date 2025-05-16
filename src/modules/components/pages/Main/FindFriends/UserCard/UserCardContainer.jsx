import React from "react";
import { useDialogsActions } from "../../../../../hooks/useDialogsActions";
import { useInputHandlers } from "../../../../../hooks/useInputHandlers";
import { useFollowToggle } from "../../../../../hooks/useFollowToggle";
import { updateNewMessageText } from "../../../../../../redux/DialogsReducer/dialogs-reducer";
import useModal from "../../../../../hooks/useModal";
import UserMessageModal from "./UserMessageModal";
import UserCard from "./UserCard";
import useData from "../../../../../hooks/useData";

// Контейнер для карточки пользователя
const UserCardContainer = ({ friend, t }) => {
  // Получаем данные текста из state для ввода сообщения для отправки
  const newMessageText = useData("dialogs").newMessageText;
  // Состояние для управления открытием модального окна
  const { isModalOpen, openModal, closeModal } = useModal();
  // Хук для работы с действиями диалогов  // Хук для отправки сообщения
  const { handleSendMessageAndCloseModal } = useDialogsActions();
  // Хук для подписки и отписки
  const toggleFollow = useFollowToggle();
  // Для работы с textarea
  const { useTextChangeHandlers, handleKeyDown } = useInputHandlers(
    updateNewMessageText,
    () => handleSendMessageAndCloseModal(newMessageText, friend, closeModal)
  );

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
