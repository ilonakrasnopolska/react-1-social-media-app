import React from "react";
import ChatWindow from "./ChatWindow/ChatWindow"; // Импорт компонента для окна чата
import ChatBubbleContainer from "./ChatWindow/ChatBubbleContainer/ChatBubbleContainer"; // Импорт компонента для отображения сообщений чата

// Контейнер для отображения чата
const ChatWindowContainer = ({ users, newMessageText, idFromUrl, t }) => {
  // Находим текущего пользователя по id из URL
  const currentUser = users.find((user) => user.userId === idFromUrl);

  // Извлекаем чат текущего пользователя (если он существует)
  const currentChat = currentUser?.chat;

  return (
    <ChatWindow
      // Передаем компонент с сообщениями в окно чата
      chatContent={
        <ChatBubbleContainer
          currentChat={currentChat}
          userId={idFromUrl}
          t={t}
        />
      }
      // Отображаем новое сообщение, если чат существует
      showNewMessage={!!currentChat}
      // Передаем информацию о текущем пользователе
      userId={currentUser?.userId}
      newMessageText={newMessageText}
      t={t}
    />
  );
};

export default ChatWindowContainer;
