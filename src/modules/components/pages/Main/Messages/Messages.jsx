import React from "react";
import Classes from "./Messages.module.css";
import UsersList from "./UsersList/UsersList";
import ChatWindowContainer from "./ChatWindowContainer/ChatWindowContainer";

// Компонент для отображения сообщений (списка пользователей и окна чата)
const Messages = ({ dialogs, isLoading, idFromUrl, t }) => {
  return (
    <div className={Classes.window_dialogs}>
      {/* Компонент для отображения списка пользователей */}
      <UsersList
        users={dialogs.users} // Список пользователей
        idFromUrl={idFromUrl} // ID пользователя из URL
        searchUserText={dialogs.searchUserText} // Текст для поиска пользователя
        filteredContacts={dialogs.filteredContacts} // Отфильтрованные контакты
        t={t} // Функция для перевода текста
        isLoading={isLoading} // Статус загрузки
      />

      {/* Компонент для отображения окна чата */}
      <ChatWindowContainer
        users={dialogs.users} // Список пользователей
        idFromUrl={idFromUrl} // ID пользователя из URL
        newMessageText={dialogs.newMessageText} // Текст нового сообщения
        t={t} // Функция для перевода текста
      />
    </div>
  );
};

export default Messages;
