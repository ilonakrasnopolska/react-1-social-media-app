import React from "react";
import Classes from "./Post.module.css"; // Подключаем стили для компонента
import ReactionsContainer from "./Reactions/ReactionsContainer"; // Контейнер с реакциями
import Comments from "./Comments/Comments"; // Список комментариев
import AddComment from "./Comments/AddComment/AddComment"; // Поле для добавления комментария
import Avatar from "../../../../../common/Avatar"; // Компонент для отображения аватара

const Post = ({ post, onDelete, isCommentsOpen, t }) => {
  return (
    <li className={Classes.item}>
      <div className={Classes.post}>
        <Avatar src={post.avatar} alt="User avatar" className={Classes.avatar} />
        <div className={Classes.post_message}>
          <span className={Classes.post_name}>{post.name}</span>
          <div className={Classes.post_content}>
            <span>{post.message}</span>
            <span className={Classes.post_time}>{post.time}</span>
          </div>
        </div>

        <ReactionsContainer post={post} />

        {/* Кнопка для удаления поста */}
        <button onClick={onDelete} className={Classes.delete}>...</button>
      </div>

      {/* Отображение комментариев, если они открыты */}
      {isCommentsOpen && (
        <div className={`${Classes.comments} ${isCommentsOpen ? Classes.visible : ""}`}>
          <Comments postId={post.postId} t={t} />
          <AddComment postId={post.postId} t={t} />
        </div>
      )}
    </li>
  );
};

export default Post;
