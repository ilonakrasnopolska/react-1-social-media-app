import React from "react"; // Импорт React
import { useRequestHelpForm } from "../../../../../../hooks/useRequestHelpForm"; // Хук для обработки формы запроса на помощь
import { useInputHandlers } from "../../../../../../hooks/useInputHandlers"; // Хук для обработки нажатий клавиш
import Help from "./Help"; // Дочерний компонент для отображения формы

// Контейнер для компонента Help
const HelpContainer = ({ helpCenter, t }) => {
  // Использование хука для управления состоянием формы запроса на помощь
  const {
    requestUserNameText, // Текст введенного имени пользователя
    requestMessageText, // Текст сообщения пользователя
    errors, // Ошибки валидации формы
    handleInputChange, // Обработчик изменений в полях ввода
    handleFormSubmit, // Обработчик отправки формы
  } = useRequestHelpForm(helpCenter);

  // Хук для обработки нажатий клавиш (например, Enter для отправки формы)
  const { handleKeyDown } = useInputHandlers("", handleFormSubmit);

  return (
    // Рендерим компонент Help и передаем все необходимые пропсы
    <Help
      requestUserNameText={requestUserNameText} // Текст имени пользователя
      requestMessageText={requestMessageText} // Текст сообщения пользователя
      errors={errors} // Ошибки валидации
      handleInputChange={handleInputChange} // Обработчик изменений в полях ввода
      handleKeyDown={handleKeyDown} // Обработчик нажатий клавиш
      handleFormSubmit={handleFormSubmit} // Обработчик отправки формы
      t={t} // Функция перевода текста
    />
  );
};

export default HelpContainer; // Экспорт компонента
