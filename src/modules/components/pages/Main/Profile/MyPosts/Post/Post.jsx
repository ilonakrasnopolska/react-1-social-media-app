import Classes from "./Post.module.css" // Подключаем стили для компонента
import ReactionsContainer from "./Reactions/ReactionsContainer"; // Контейнер с реакциями (лайки, комментарии)
import Comments from "./Comments/Comments"; // Список комментариев
import AddComment from "./Comments/AddComment/AddComment"; // Поле для добавления комментария
import Avatar from "../../../../../common/Avatar"; // Компонент для отображения аватара

// Компонент Post принимает пост, функцию удаления, состояние комментариев и переводчик t
const Post = ({post, onDeletePost, isCommentsOpen, t}) => {
  return (
    <li className={Classes.item}>
      {/* Основной контейнер поста */}
      <div className={Classes.post}>
        {/* Аватар пользователя */}
        <Avatar src={post.avatar} alt='User avatar' className={Classes.avatar}/>

        {/* Блок с именем пользователя и текстом поста */}
        <div className={Classes.post_message}>
          <span className={Classes.post_name}>{post.name}</span>
          <div className={Classes.post_content}>
            <span>{post.message}</span>
            <span className={Classes.post_time}>{post.time}</span>
          </div>
        </div>

        {/* Блок с кнопками реакции (лайки, комментарии) */}
        <ReactionsContainer post={post}/>

        {/* Кнопка удаления поста */}
        <button onClick={() => onDeletePost(post.postId)} className={Classes.delete}>...</button>
      </div>

      {/* Блок комментариев, отображается, если isCommentsOpen === true */}
      {isCommentsOpen && (
        <div className={`${Classes.comments} ${isCommentsOpen ? Classes.visible : ""}`}>
          <Comments postId={post.postId} t={t}/> {/* Отображение комментариев */}
          <AddComment postId={post.postId} t={t} /> {/* Форма для добавления комментария */}
        </div>
      )}
    </li>
  );
}

export default Post; // Экспорт компонента
