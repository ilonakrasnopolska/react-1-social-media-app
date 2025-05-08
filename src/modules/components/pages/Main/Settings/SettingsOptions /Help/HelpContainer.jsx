import React, { useState, useEffect } from "react"; // Импорт React
import { useRequestHelpForm } from "../../../../../../hooks/useRequestHelpForm"; // Хук для обработки формы запроса на помощь
import { useInputHandlers } from "../../../../../../hooks/useInputHandlers"; // Хук для обработки нажатий клавиш
import Help from "./Help"; // Дочерний компонент для отображения формы
import ModalSuccessMessage from "../../../../../common/ModalSuccessMessage/ModalSuccessMessage"; // Модальное окно успешной отправки

// Контейнер для компонента Help
const HelpContainer = ({ helpCenter, t }) => {
  const [showModal, setShowModal] = useState(false); // Состояние для отображения модалки
  const {
    requestUserNameText, // Текст введенного имени пользователя
    requestMessageText, // Текст сообщения пользователя
    errors, // Ошибки валидации формы
    handleInputChange, // Обработчик изменений в полях ввода
    handleFormSubmit, // Обработчик отправки формы из хука
    isMessageSend,
  } = useRequestHelpForm(helpCenter);

  // Хук для обработки нажатий клавиш (например, Enter для отправки формы)
  const { handleKeyDown } = useInputHandlers("", handleFormSubmit);

  // Хендлер для сабмита формы
  const handleSubmit = (event) => {
    if (event) event.preventDefault(); // защита от undefined
    handleFormSubmit(event); // передаем event в handleFormSubmit
  };

  useEffect(() => {
    if (isMessageSend) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1000);
    }
  }, [isMessageSend]);

  return (
    <>
      {/* Рендерим компонент Help и передаем все необходимые пропсы */}
      <Help
        requestUserNameText={requestUserNameText} // Текст имени пользователя
        requestMessageText={requestMessageText} // Текст сообщения пользователя
        errors={errors} // Ошибки валидации
        handleInputChange={handleInputChange} // Обработчик изменений в полях ввода
        handleKeyDown={handleKeyDown} // Обработчик нажатий клавиш
        handleFormSubmit={handleSubmit} // Обработчик отправки формы
        t={t} // Функция перевода текста
      />
      {/* Модальное окно с успехом отправки */}
      <ModalSuccessMessage show={showModal} t={t} />
    </>
  );
};

export default HelpContainer; // Экспорт компонента
