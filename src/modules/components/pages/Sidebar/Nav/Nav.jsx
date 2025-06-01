import React from "react";
import Classes from "./Nav.module.css"; // Импортируем стили для навигации
import { NavLink } from "react-router-dom"; // Импортируем компонент для навигации, который будет работать с React Router
import clsx from "clsx"; // Импортируем библиотеку clsx для динамического добавления классов

const Nav = ({ t, nav }) => {
  return (
    <ul className={Classes.list}>
      {/* Список навигации */}
      {nav.map((el) => (
        <li className={Classes.item} key={el.id}>
          {/* Каждый элемент списка с уникальным ключом */}
          <NavLink
            end={el.url === "/profile"} // Только для профиля делаем строгую проверку
            className={({ isActive }) =>
              clsx(Classes.link, { [Classes.active]: isActive })
            } // Применяем активный класс если ссылка активна
            to={el.url} // Указываем путь для перехода
          >
            {/* Переводим название элемента навигации с помощью функции t */}
            {t(el.name)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
