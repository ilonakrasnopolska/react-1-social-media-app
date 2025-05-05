import Classes from "../../ChatWindowContainer.module.css";
import ChatBubble from "./ChatBubble/ChatBubble";
import DeleteMessageModal from "../ChatBubbleContainer/DeleteMessageModal";
import { useDeleteMessageModal } from "../../../../../../../hooks/useDeleteMessageModal";

const ChatBubbleContainer = ({ currentChat, userId, t }) => {
  const { isModalOpen, openModal, closeModal, onConfirmDelete } = useDeleteMessageModal(userId);

  if (!currentChat) {
    return <p className={Classes.noChat}>{t("SelectChat")}</p>;
  }

  if (currentChat.messages.length === 0) {
    return <p className={Classes.initialList}>{t("Start")}</p>;
  }

  return (
    <>
      {currentChat.messages.map((message) => (
        <ChatBubble
          key={message.id}
          userId={userId}
          message={message}
          t={t}
          openModal={() => openModal(message.id)}
        />
      ))}

      <DeleteMessageModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onConfirmDelete={onConfirmDelete}
        t={t}
      />
    </>
  );
};

export default ChatBubbleContainer;
