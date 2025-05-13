import React from "react"; // Импортируем React
import { NavLink } from "react-router-dom"; // Импортируем компонент NavLink для маршрутизации
import ImageWithLoader from "../../../../common/ImageWithLoader/ImageWithLoader";
import Classes from "./Friend.module.css"; // Импортируем стили для компонента

const Friend = ({ friend, t }) => {
  // Деструктурируем friend и t из пропсов
  return (
    <li className={Classes.item}>
      {/* Ссылка на страницу поиска друзей с именем пользователя */}
      <NavLink to={"/profile/" + friend.userId} className={Classes.user__name}>
        {/* Изображение друга (аватар) */}
        <ImageWithLoader
          src={friend.avatar}
          alt="avatar"
          className={Classes.avatar}
          height="50px"
        />
        {/* Отображаем имя друга, переведенное через функцию t */}
        <span>{t(friend.name)} </span>
      </NavLink>
    </li>
  );
};

export default Friend; // Экспортируем компонент
