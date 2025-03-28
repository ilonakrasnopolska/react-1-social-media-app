import Classes from "./UserSearchDropdown.module.css"; // Импорт стилей
import React from "react";
import { NavLink } from "react-router-dom"; // Компонент для навигации между страницами
import { useDialogsActions } from "../../../../../../../hooks/useDialogsActions"; // Хук для действий с диалогами

// Компонент для отображения выпадающего списка с пользователями
const UserSearchDropdown = ({ filteredContacts, t }) => {
  // Получаем функцию для начала чата
  const { handleStartChat } = useDialogsActions();

  return (
    <ul className={Classes.dropdown}>
      {/* Если нет контактов, отображаем сообщение о пустом списке */}
      {filteredContacts.length === 0 ? (
        <li className={Classes.contact}>{t("Empty")}</li> // Сообщение "Нет результатов"
      ) : (
        // Если есть контакты, отображаем их
        filteredContacts.map((contact) => (
          <li key={contact.userId} className={Classes.contact}>
            {/* Ссылка на страницу чата с выбранным пользователем */}
            <NavLink to={`/messages/${contact.userId}`}>
              <button
                onClick={() => handleStartChat(contact, contact.userId)} // Начать чат с выбранным пользователем
                className={Classes.button}
              >
                {/* Отображаем аватар пользователя */}
                <img
                  className={Classes.avatar}
                  src={contact.avatar}
                  alt="Avatar"
                />
                {/* Отображаем имя пользователя */}
                <span className={Classes.name}>{contact.name}</span>
              </button>
            </NavLink>
          </li>
        ))
      )}
    </ul>
  );
};

export default UserSearchDropdown;
