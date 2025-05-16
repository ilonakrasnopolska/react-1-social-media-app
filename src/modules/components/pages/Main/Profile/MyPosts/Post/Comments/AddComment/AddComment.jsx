import React from "react";
import Classes from "./AddComment.module.css";
import { useCommentActions } from "../../../../../../../../hooks/useCommentActions";
import Button from "../../../../../../../common/Button";

const AddComment = ({ postId, t }) => {
  // Получаем функции и переменные из хука useCommentActions
  const { newCommentText, handleCommentChange, handleAddComment, handleKeyDown } = useCommentActions(postId);

  return (
    <div className={Classes.add_comment}>
      {/* Форма для добавления комментария */}
      <form className={Classes.comment_form}>
        {/* Поле ввода текста комментария */}
        <textarea
          id={`comment-${postId}`} // Уникальный id для каждого комментария
          name="comment"
          value={String(newCommentText)} // Приводим newCommentText к строке
          onChange={handleCommentChange} // Обработчик изменения текста
          onKeyDown={handleKeyDown} // Обработчик нажатия клавиш (например, Enter)
          className={Classes.comment_input}
          placeholder={t("AddComment")} // Локализованный текст для placeholder
        />
        {/* Кнопка отправки комментария */}
        <Button
              className={Classes.submit_button}
              onClick={handleAddComment} // Функция для добавления поста
              label={t("Add")} // Лейбл кнопки с переводом
              disabled={!newCommentText.trim()}
            />
      </form>
    </div>
  );
};

export default AddComment;
