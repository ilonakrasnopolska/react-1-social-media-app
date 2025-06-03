import React from "react";
import Classes from "./PostMaker.module.css"; // Импорт CSS модуля для стилей
import Button from "../../../../common/Button"; // Импорт компонента кнопки

const PostMaker = ({
  newPostText,
  useTextChangeHandlers,
  handleKeyDown,
  handleAddPost,
  t,
}) => {
  return (
    <section className="newPost section">
      <div className={Classes.content}>
        {/* Заголовок секции с переводом текста */}
        <span className={Classes.title}>{t("My Posts")}</span>

        {/* Форма для создания нового поста */}
        <form className={Classes.form} onSubmit={handleAddPost}>
          {/* Текстовое поле для ввода текста нового поста */}
          <textarea
            name="newPost"
            value={newPostText} // Привязка к состоянию текста нового поста
            onChange={useTextChangeHandlers} // Хендлер для изменения текста
            onKeyDown={handleKeyDown} // Хендлер для нажатия клавиш (например, для отправки поста)
            className={Classes.textarea}
            placeholder={t("Your News")} // Плейсхолдер с переводом
          />

          {/* Кнопка для отправки нового поста */}
          <div className={Classes.buttonBox}>
            <Button
              className={Classes.button}
              onClick={handleAddPost} // Функция для добавления поста
              label={t("Post")} // Лейбл кнопки с переводом
              disabled={!newPostText.trim()}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostMaker;
