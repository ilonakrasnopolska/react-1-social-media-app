import { useState } from "react";
import { useDialogsActions } from "../hooks/useDialogsActions";

export const useDeleteMessageModal = (userId) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const { handleDeleteMessage } = useDialogsActions();

  const openModal = (messageId) => {
    setSelectedMessageId(messageId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessageId(null);
  };

  const onConfirmDelete = () => {
    if (selectedMessageId) {
      handleDeleteMessage(userId, selectedMessageId);
    }
    closeModal();
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    onConfirmDelete,
  };
};
