import { useDispatch } from "react-redux";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";

// Кастомный хук для обработки ввода текста и нажатия клавиш
export const useInputHandlers = (action, func) => {
  // Получаем dispatch для отправки действий в Redux
  const dispatch = useDispatch();

  // Получаем текущий язык из контекста LanguageContext
  const { language } = useContext(LanguageContext);

  // Обработчик изменения текста
  const useTextChangeHandlers = (e) => {
    // Отправляем действие с текстом и языком в Redux
    dispatch(action({ text: e.target.value, language }));
  };

  // Обработчик нажатия клавиш
  const handleKeyDown = (e) => {
    // Проверяем, если нажата клавиша "Enter" без "Shift", предотвращаем стандартное поведение
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      func(e); // Вызываем переданную функцию
    }
  };

  // Возвращаем обработчики для использования в компонентах
  return { useTextChangeHandlers, handleKeyDown };
};
