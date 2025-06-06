import React from "react";
import Classes from "./Post.module.css"; // Подключаем стили для компонента
import ReactionsContainer from "./Reactions/ReactionsContainer"; // Контейнер с реакциями
import Comments from "./Comments/Comments"; // Список комментариев
import AddComment from "./Comments/AddComment/AddComment"; // Поле для добавления комментария
import ImageWithLoader from "../../../../../common/ImageWithLoader/ImageWithLoader";

const Post = ({ post, onDelete, isCommentsOpen, isOwnProfile, t }) => {
  return (
    <li className={Classes.item}>
      <div className={Classes.post}>
        <ImageWithLoader
          src={post.avatar}
          alt="User avatar"
          className={Classes.avatar}
        />
        <div className={Classes.post_message}>
          <span className={Classes.post_name}>{post.name}</span>
          <div className={Classes.post_content}>
            <span>{post.message}</span>
            <span className={Classes.post_time}>{post.time}</span>
          </div>
        </div>
        <ReactionsContainer post={post} />
        {/* Кнопка для удаления поста */}
        {isOwnProfile && (
          <button onClick={onDelete} className={Classes.delete}>
            ...
          </button>
        )}
      </div>

      {/* Отображение комментариев, если они открыты */}
      {isCommentsOpen && (
        <div
          className={`${Classes.comments} ${
            isCommentsOpen ? Classes.visible : ""
          }`}
        >
          <Comments postId={post.postId} t={t} isOwnProfile={isOwnProfile} />
          <AddComment postId={post.postId} t={t} />
        </div>
      )}
    </li>
  );
};

export default Post;
