import React, { memo } from "react";
import Classes from "./Comments.module.css";
import { useCommentActions } from "../../../../../../../hooks/useCommentActions";
import Avatar from "../../../../../../common/Avatar";

// Компонент для отображения комментариев к посту
const Comments = memo(({ postId, t }) => {
  // Получаем список комментариев и функции для работы с ними
  const { Messages, onReplyToComment, onDeleteComment } =
    useCommentActions(postId);

  return (
    <ul className={Classes.list}>
      {/* Проверяем, есть ли комментарии */}
      {Messages.length > 0 ? (
        Messages.map((comment) => (
          <li key={comment.commentId} className={Classes.item}>
            {/* Аватар пользователя, оставившего комментарий */}
            <Avatar
              src={comment.avatar}
              alt="User avatar"
              className={Classes.avatar}
            />

            <div className={Classes.post}>
              <div className={Classes.comment}>
                {/* Имя пользователя */}
                <strong>{t(comment.user)} </strong>
                <div className={Classes.content}>
                  {/* Текст комментария */}
                  <span>{comment.message}</span>
                  {/* Время комментария */}
                  <span className={Classes.time}>{comment.time}</span>
                  {/* Кнопка "Ответить" */}
                  <button
                    onClick={() => onReplyToComment(comment.commentId)}
                    className={Classes.response_btn}
                  >
                    {t("Response")}
                  </button>
                </div>
              </div>
            </div>

            {/* Кнопка удаления комментария */}
            <button
              onClick={() => onDeleteComment(comment.commentId)}
              className={Classes.delete}
            >
              ...
            </button>
          </li>
        ))
      ) : (
        // Сообщение, если комментариев нет
        <li className={Classes.item}>{t("NoComments")}</li>
      )}
    </ul>
  );
});

export default Comments;
