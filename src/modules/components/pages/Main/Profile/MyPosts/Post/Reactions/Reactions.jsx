import React from "react";
import { CommentIcon } from "../../../../../../../../assets/SVG-icons"; // Импорт иконки комментария
import Classes from "./Reactions.module.css"; // Подключаем стили для реакций

// Компонент Reactions отображает кнопки для комментариев и лайков
const Reactions = ({ comments, likes, likeButtonClass, onLike, onComment }) => {
  return (
    <div className={Classes.btn__box}>

      {/* Кнопка для открытия комментариев */}
      <div className={Classes.btn__comment}>
        <button onClick={onComment} className={Classes.btn__commentSvg}>
          <CommentIcon /> {/* Иконка комментария */}
        </button>
        <span className={Classes.btn__commentCount}>
          {comments} {/* Количество комментариев */}
        </span>
      </div>

      {/* Кнопка лайка */}
      <div className={Classes.btn__likeBox}>
        <button onClick={onLike} className={likeButtonClass}>
          <span className={Classes.btn__likeSvg}></span> {/* Иконка лайка (можно добавить сюда) */}
        </button>
        <span className={Classes.btn__likeCount}>
          {likes} {/* Количество лайков */}
        </span>
      </div>

    </div>
  );
}

export default Reactions; // Экспорт компонента
