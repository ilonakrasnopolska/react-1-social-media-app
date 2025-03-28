import Classes from "./DialogUser.module.css";
import React from "react";
import { NavLink } from "react-router-dom"; // Импорт NavLink для маршрутизации
import { useActiveDialogUser } from "../../../../../../hooks/useActiveDialogUser"; // Хук для активного пользователя
import Avatar from "../../../../../common/Avatar"; // Компонент для отображения аватара

// Компонент для отображения пользователя в списке диалогов
const DialogUser = ({ users, userId, idFromUrl }) => {
  // Получаем данные активного пользователя: id, аватар, имя, активность, обработчик клика
  const { id, avatar, name, isActive, handleClick } = useActiveDialogUser(
    userId,
    users,
    idFromUrl
  );

  return (
    <li className={Classes.info}>
      {/* Ссылка для перехода к чат-окну с этим пользователем */}
      <NavLink
        to={`/messages/${id}`} // Переход по маршруту с ID пользователя
        className={({ isActive }) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        } // Применение стилей для активной ссылки
        onClick={handleClick} // Обработчик клика для активации пользователя
      >
        <button
          className={`${Classes.button} ${
            isActive ? Classes.activeButton : ""
          }`}
        >
          {/* Отображение аватара пользователя */}
          <Avatar src={avatar} alt="Avatar" className={Classes.avatar} />
          {/* Отображение имени пользователя */}
          <span className={Classes.name}>{name}</span>
        </button>
      </NavLink>
    </li>
  );
};

export default DialogUser;
