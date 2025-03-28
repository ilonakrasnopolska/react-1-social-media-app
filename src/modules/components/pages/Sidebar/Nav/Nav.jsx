import React from "react";
import Classes from "./Nav.module.css"; // Импортируем стили для навигации
import { NavLink } from "react-router-dom"; // Импортируем компонент для навигации, который будет работать с React Router
import { useSelector } from "react-redux"; // Импортируем хук useSelector для доступа к состоянию из Redux
import clsx from "clsx"; // Импортируем библиотеку clsx для динамического добавления классов

const Nav = ({ t }) => {
  // Извлекаем данные навигации из глобального состояния Redux с помощью useSelector
  const { nav } = useSelector((state) => state.sidebar);

  return (
    <ul className={Classes.list}>
      {" "}
      {/* Список навигации */}
      {nav.map((el) => (
        <li className={Classes.item} key={el.id}>
          {" "}
          {/* Каждый элемент списка с уникальным ключом */}
          <NavLink
            className={({ isActive }) =>
              clsx(Classes.link, { [Classes.active]: isActive })
            } // Применяем активный класс если ссылка активна
            to={el.url} // Указываем путь для перехода
          >
            {t(el.name)}{" "}
            {/* Переводим название элемента навигации с помощью функции t */}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
