import Classes from "./CreateNewChat.module.css"; // Импорт стилей
import React from "react";
import UserSearchDropdown from "./UserSearchDropdown/UserSearchDropdown"; // Компонент для отображения списка пользователей
import { useInputHandlers } from "../../../../../../hooks/useInputHandlers"; // Хук для обработки ввода
import { updateSearchUserText } from "../../../../../../../redux/DialogsReducer/dialogs-reducer"; // Действие для обновления текста поиска

// Компонент для создания нового чата и поиска пользователей
const CreateNewChat = ({ searchUserText, filteredContacts, t }) => {
  // Используем хук для обработки изменений в поле ввода
  const { useTextChangeHandlers } = useInputHandlers(updateSearchUserText);

  return (
    <div className={Classes.box}>
      {/* Поле ввода для поиска пользователя */}
      <input
        id="create-chat" // Уникальный ID для элемента
        className={Classes.input} // Применение стилей
        value={searchUserText} // Значение поля ввода
        onChange={useTextChangeHandlers} // Обработчик изменения текста
        type="text" // Тип поля ввода
        placeholder={t("FindUser")} // Плейсхолдер для поля ввода
      />
      {/* Отображение выпадающего списка пользователей, если введён текст */}
      {searchUserText.length > 0 && (
        <UserSearchDropdown
          inShowUserList={true}
          filteredContacts={filteredContacts}
          t={t}
        />
      )}
    </div>
  );
};

export default CreateNewChat;
