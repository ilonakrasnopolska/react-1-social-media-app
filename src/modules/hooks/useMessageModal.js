import useModal from "./useModal";
import useData from "./useData";
import { useDialogsActions } from "./useDialogsActions";
import { useInputHandlers } from "./useInputHandlers";

// Кастомный хук для управления модальным окном
const useMessageModal = (updateNewMessageText,userData) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const dialogsData = useData("dialogs");
  const newMessageText = dialogsData.newMessageText;

  const { handleSendMessageAndCloseModal } = useDialogsActions();

  const { useTextChangeHandlers, handleKeyDown } = useInputHandlers(
    updateNewMessageText,
    () => handleSendMessageAndCloseModal(newMessageText, userData, closeModal)
  );

  return {
    isModalOpen,
    openModal,
    closeModal,
    newMessageText,
    useTextChangeHandlers,
    handleKeyDown,
    handleSendMessageAndCloseModal,
  };
};


export default useMessageModal;
