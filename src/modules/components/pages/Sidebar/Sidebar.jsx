import React from "react"; // Импортируем React
import Classes from "./Sidebar.module.css"; // Импортируем стили для компонента
import Nav from "./Nav/Nav"; // Импортируем компонент навигации
import FriendsContainer from "./Friends /FriendsContainer"; // Импортируем контейнер для друзей
import { useSelector } from "react-redux"; // Импортируем хук useSelector для доступа к состоянию из Redux

const Sidebar = ({ t }) => {
  // Извлекаем данные навигации из глобального состояния Redux с помощью useSelector
  const { nav } = useSelector((state) => state.sidebar);
  // Принимаем пропс t (предположительно для перевода или других данных)
  return (
    <nav className={Classes.nav}>
      {/* Передаем пропс t в компоненты */}
      <Nav t={t} nav={nav} />
      <FriendsContainer t={t} />
    </nav>
  );
};

export default Sidebar; // Экспортируем компонент
