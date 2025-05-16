import Classes from "../../ChatWindowContainer.module.css";
import ChatBubble from "./ChatBubble/ChatBubble";
import DeleteMessageModal from "../ChatBubbleContainer/DeleteMessageModal";
import useModal from "../../../../../../../hooks/useModal";
import { useDialogsActions } from "../../../../../../../hooks/useDialogsActions";

const ChatBubbleContainer = ({ currentChat, userId, t }) => {
  const { isModalOpen, openModal, closeModal, confirm } = useModal();
  const { handleDeleteMessage } = useDialogsActions();

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
          openModal={() =>
            openModal(message.id, (messageId) => handleDeleteMessage(userId, messageId))
          }
        />
      ))}

      <DeleteMessageModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onConfirmDelete={() => confirm()}
        t={t}
      />
    </>
  );
};

export default ChatBubbleContainer;
