import React from "react";
import Post from "./Post"; // Импорт компонента Post для отображения поста

const PostContainer = ({ post, t, onDelete, isOwnProfile }) => {
  const isCommentsOpen = post.commentData.commentsVisibility; // Проверка, открыты ли комментарии

  if (!post) return null; // Если нет поста, то ничего не рендерим

  return (
    <Post
      post={post}
      onDelete={onDelete}
      isCommentsOpen={isCommentsOpen} // Передаем информацию о комментариях
      isOwnProfile={isOwnProfile}
      t={t} // Передаем локализованные строки
    />
  );
};

export default PostContainer;
