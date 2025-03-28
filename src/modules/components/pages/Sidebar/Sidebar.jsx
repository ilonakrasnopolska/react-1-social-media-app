import React from "react"; // Импортируем React
import Classes from "./Sidebar.module.css"; // Импортируем стили для компонента
import Nav from "./Nav/Nav"; // Импортируем компонент навигации
import FriendsContainer from "./Friends /FriendsContainer"; // Импортируем контейнер для друзей

const Sidebar = ({ t }) => {
  // Принимаем пропс t (предположительно для перевода или других данных)
  return (
    <nav className={Classes.nav}>
      {" "}
      {/* Оборачиваем все в тег <nav>, применяем стили из Sidebar.module.css */}
      <Nav t={t} /> {/* Передаем пропс t в компонент Nav */}
      <FriendsContainer t={t} />{" "}
      {/* Передаем пропс t в компонент FriendsContainer */}
    </nav>
  );
};

export default Sidebar; // Экспортируем компонент
