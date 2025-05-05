import { useState } from "react";
import { usePostActions } from "./usePostActions";

export const useDeleteModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const { onDeletePost } = usePostActions();

  const openModal = (post) => {
    setPostToDelete(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setPostToDelete(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      onDeletePost(postToDelete.postId);
    }
    closeModal();
  };

  return {
    isModalOpen,
    postToDelete,
    openModal,
    closeModal,
    confirmDelete,
  };
};
