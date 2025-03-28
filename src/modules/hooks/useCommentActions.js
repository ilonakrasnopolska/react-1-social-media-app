import { useDispatch, useSelector } from "react-redux";
import {
  updateNewCommentText,
  addComment,
  replyOnComment,
  deleteComment,
} from "../../redux/ProfileReducer/profile-reducer";

// Хук для работы с комментариями
export const useCommentActions = (postId) => {
  const dispatch = useDispatch();

  // Получаем пост по ID
  const post = useSelector((state) =>
    state.profile.posts.find((post) => post.postId === postId)
  );

  // Получаем сообщения комментариев, если они существуют
  const Messages = post && post.commentData ? post.commentData.messages : [];

  // Получаем новый текст комментария, если он существует
  const newCommentText = useSelector(
    (state) =>
      state.profile.posts.find((post) => post.postId === postId)
        ?.newCommentText || ""
  );

  // Обработчик изменения текста комментария
  const handleCommentChange = (e) => {
    dispatch(updateNewCommentText({ postId, value: e.target.value }));
  };

  // Обработчик добавления нового комментария
  const handleAddComment = (e) => {
    e.preventDefault();
    // Проверяем, что комментарий не пустой
    if (newCommentText.trim()) {
      dispatch(addComment({ postId }));
    }
  };

  // Обработчик нажатия клавиши
  const handleKeyDown = (e) => {
    // Если нажата клавиша "Enter" без Shift
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddComment(e);
    }
  };

  // Ответ на комментарий
  const onReplyToComment = (commentId) => {
    // Находим комментарий по commentId
    const comment = Messages.find((comment) => comment.commentId === commentId);
    if (comment) {
      const value = `${comment.user},`;
      dispatch(replyOnComment({ value, postId }));
    } else {
      console.warn("Comment not found!");
    }
  };

  // Удаление комментария
  const onDeleteComment = (commentId) => {
    const confirmDelete = window.confirm("Delete comment?");
    if (confirmDelete) {
      dispatch(deleteComment({ commentId, postId }));
    }
  };

  return {
    newCommentText,
    handleCommentChange,
    handleAddComment,
    handleKeyDown,
    Messages,
    onReplyToComment,
    onDeleteComment,
  };
};
