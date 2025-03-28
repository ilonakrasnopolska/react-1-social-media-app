import React from "react";
import PostMaker from "./PostMaker"; // Импорт компонента для создания нового поста
import { usePostActions } from "../../../../../hooks/usePostActions"; // Хук для обработки действий с постами

const PostMakerContainer = ({ t }) => {
  // Извлекаем необходимые функции и состояния из хука usePostActions
  const { newPostText, useTextChangeHandlers, handleKeyDown, handleAddPost } =
    usePostActions();

  return (
    <PostMaker
      newPostText={newPostText} // Передаем текст нового поста
      useTextChangeHandlers={useTextChangeHandlers} // Передаем хендлеры для изменения текста
      handleKeyDown={handleKeyDown} // Хендлер для нажатий клавиш
      handleAddPost={handleAddPost} // Функция для добавления поста
      t={t} // Функция для перевода текста, если используется локализация
    />
  );
};

export default PostMakerContainer;
