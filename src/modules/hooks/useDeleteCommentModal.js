import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../redux/ProfileReducer/profile-reducer";

export const useCommentDeleteModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  const openModal = (commentId, postId) => {
    setCommentToDelete({ commentId, postId });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCommentToDelete(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (commentToDelete) {
      dispatch(deleteComment(commentToDelete));
    }
    closeModal();
  };

  return {
    isModalOpen,
    commentToDelete,
    openModal,
    closeModal,
    confirmDelete,
  };
};
