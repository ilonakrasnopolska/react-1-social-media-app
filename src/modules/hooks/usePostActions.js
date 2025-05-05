import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import {
  addPost,
  deletePost,
  updateNewPostText,
} from "../../redux/ProfileReducer/profile-reducer";

// Кастомный хук для работы с действиями постов
export const usePostActions = () => {
  // Получаем dispatch для отправки действий в Redux
  const dispatch = useDispatch();

  // Извлекаем текущий язык из контекста
  const { language } = useContext(LanguageContext);

  // Извлекаем текст нового поста из Redux состояния
  const newPostText = useSelector((state) => state.profile.newPostText);

  // Обработчик изменения текста поста
  const useTextChangeHandlers = (e) => {
    // Отправляем действие для обновления текста нового поста в Redux
    dispatch(updateNewPostText({ text: e.target.value, language }));
  };

  // Обработчик нажатия клавиши
  const handleKeyDown = (e) => {
    // Если нажата клавиша "Enter" (без Shift), добавляем пост
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Отменяем стандартное поведение (новая строка)
      handleAddPost(e); // Добавляем пост
    }
  };

  // Обработчик добавления поста
  const handleAddPost = (e) => {
    e.preventDefault(); // Отменяем стандартное поведение формы
    // Если текст поста не пустой, отправляем действие для добавления поста
    if (newPostText.trim()) {
      dispatch(addPost());
    }
  };

  // Обработчик удаления поста
  const onDeletePost = (postId) => {
      // Отправляем действие для удаления поста
      dispatch(deletePost(postId));
  };

  // Возвращаем все необходимые данные и функции для работы с постами
  return {
    newPostText,
    useTextChangeHandlers,
    handleKeyDown,
    handleAddPost,
    onDeletePost,
  };
};
