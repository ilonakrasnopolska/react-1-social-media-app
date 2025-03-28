import React from "react"; // Импортируем React
import { NavLink } from "react-router-dom"; // Импортируем компонент NavLink для маршрутизации
import Classes from "./Friend.module.css"; // Импортируем стили для компонента

const Friend = ({ friend, t }) => {
  // Деструктурируем friend и t из пропсов
  return (
    <li className={Classes.item}>
      {" "}
      {/* Элемент списка, представляющий одного друга */}
      {/* Изображение друга (аватар) */}
      <img className={Classes.avatar} src={friend.avatar} alt="avatar" />{" "}
      {/* Используем src из объекта friend для аватара */}
      {/* Ссылка на страницу поиска друзей с именем пользователя */}
      <NavLink to={"/find_friends"} className={Classes.user__name}>
        {t(friend.name)}{" "}
        {/* Отображаем имя друга, переведенное через функцию t */}
      </NavLink>
    </li>
  );
};

export default Friend; // Экспортируем компонент
