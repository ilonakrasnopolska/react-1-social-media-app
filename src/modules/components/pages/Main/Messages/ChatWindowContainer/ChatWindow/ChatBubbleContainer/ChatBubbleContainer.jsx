import Classes from "../../ChatWindowContainer.module.css"; // Импорт CSS классов для стилизации
import ChatBubble from "./ChatBubble/ChatBubble"; // Импорт компонента для отображения сообщений чата
import React from "react";

// Контейнер для отображения сообщений чата
const chatBubbleContainer = ({ currentChat, userId, t }) => {
  // Проверяем, существует ли текущий чат
  if (!currentChat) {
    return <p className={Classes.noChat}>{t("SelectChat")}</p>; // Если чат не выбран, показываем сообщение о необходимости выбрать чат
  }

  // Проверяем, есть ли сообщения в чате
  if (currentChat.messages.length === 0) {
    return <p className={Classes.initialList}>{t("Start")}</p>; // Если сообщений нет, показываем сообщение о том, что нужно начать чат
  }

  // Если сообщения есть, отображаем каждое сообщение
  return currentChat.messages.map((message) => (
    <ChatBubble
      userId={userId} // Идентификатор пользователя, для отображения авторства сообщения
      message={message} // Передаем само сообщение
      key={message.id} // Уникальный ключ для каждого сообщения
      t={t} // Функция для перевода текста
    />
  ));
};

export default chatBubbleContainer;
