import React from "react";
import { useDispatch } from "react-redux"; // Импорт хука useDispatch для работы с Redux
import Reactions from "./Reactions"; // Импорт компонента Reactions, который отображает реакции
import Classes from "./Reactions.module.css"; // Импорт стилей для компонента
import {
  handleLike,
  toggleComments,
} from "../../../../../../../../redux/ProfileReducer/profile-reducer"; // Импорт действий для изменения состояния (лайк, комментарии)

const ReactionsContainer = ({ post }) => {
  const dispatch = useDispatch(); // Получаем dispatch из Redux для отправки действий
  const { postId, comments = 0, likes = 0, likedByUser = false } = post; // Деструктуризация данных поста
  const likeButtonClass = likedByUser
    ? `${Classes.btn__like} ${Classes.liked}`
    : Classes.btn__like; // Классы для кнопки лайка

  // Обработчик для лайка
  const onLike = () => dispatch(handleLike(postId)); // Отправляем действие handleLike с postId
  // Обработчик для переключения видимости комментариев
  const onComment = () => dispatch(toggleComments(postId)); // Отправляем действие toggleComments с postId

  return (
    <Reactions
      postId={postId}
      comments={comments}
      likes={likes}
      likeButtonClass={likeButtonClass}
      onLike={onLike}
      onComment={onComment}
    />
  );
};

export default ReactionsContainer;
