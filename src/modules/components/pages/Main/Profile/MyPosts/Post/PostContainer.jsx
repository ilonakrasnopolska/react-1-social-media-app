import React from "react";
import Post from "./Post"; // Импорт компонента Post для отображения поста
import { usePostActions } from "../../../../../../hooks/usePostActions"; // Импорт хука для работы с постами

const PostContainer = ({ post, t }) => {
  const { onDeletePost } = usePostActions(); // Деструктуризация для получения функции удаления поста
  const isCommentsOpen = post.commentData.commentsVisibility; // Проверка, открыты ли комментарии в посте

  if (!post) return null; // Если нет поста, то ничего не рендерим

  return (
    <Post
      post={post}
      onDeletePost={onDeletePost} // Передаем функцию удаления поста
      isCommentsOpen={isCommentsOpen} // Передаем информацию о том, открыты ли комментарии
      t={t} // Передаем функцию для локализации текста
    />
  );
};

export default PostContainer;
