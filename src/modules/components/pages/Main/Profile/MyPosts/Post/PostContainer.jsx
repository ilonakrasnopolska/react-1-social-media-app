import React from "react";
import Post from "./Post"; // Импорт компонента Post для отображения поста

const PostContainer = ({ post, t, onDelete }) => {
  const isCommentsOpen = post.commentData.commentsVisibility; // Проверка, открыты ли комментарии

  if (!post) return null; // Если нет поста, то ничего не рендерим

  return (
    <Post
      post={post}
      onDelete={onDelete}
      isCommentsOpen={isCommentsOpen} // Передаем информацию о комментариях
      t={t} // Передаем локализованные строки
    />
  );
};

export default PostContainer;
