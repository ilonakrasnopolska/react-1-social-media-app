import React from "react";
import User from "./User";
import UserMessageModal from "../../FindFriends/UserCard/UserMessageModal";
import useMessageModal from "../../../../../hooks/useMessageModal";
import { updateNewMessageText } from "../../../../../../redux/DialogsReducer/dialogs-reducer";

const UserContainer = ({
  userData,
  isLoading,
  t,
  isOwnProfile,
  handleFollowToggle,
}) => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    newMessageText,
    useTextChangeHandlers,
    handleKeyDown,
    handleSendMessageAndCloseModal,
  } = useMessageModal(updateNewMessageText, userData);
  return (
    <section className="user section">
      <User
        userData={userData}
        isLoading={isLoading}
        t={t}
        isOwnProfile={isOwnProfile}
        handleFollowToggle={handleFollowToggle}
        openModal={openModal}
      />
      <UserMessageModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        friend={userData}
        newMessageText={newMessageText}
        onChange={useTextChangeHandlers}
        onKeyDown={handleKeyDown}
        onSend={(e) => {
          e.preventDefault();
          handleSendMessageAndCloseModal(newMessageText, userData, closeModal);
        }}
        t={t}
      />
    </section>
  );
};

export default UserContainer;
