import React from "react";
import Classes from "./Header.module.css"; // Импортируем стили для хедера
import { LogoIcon } from "../../../../assets/SVG-icons"; // Импортируем иконку логотипа
import ThemeButton from "./ThemeButton/ThemeButton"; // Импортируем компонент для кнопки смены темы

const Header = () => {
  return (
    <header className={Classes.header}>
      {" "}
      {/* Основной контейнер для хедера */}
      <div className={Classes.logo}>
        {" "}
        {/* Контейнер для логотипа */}
        <LogoIcon /> {/* Отображаем иконку логотипа */}
      </div>
      <div className={Classes.themeButton}>
        {" "}
        {/* Контейнер для кнопки смены темы */}
        <ThemeButton /> {/* Компонент для переключения темы */}
      </div>
    </header>
  );
};

export default Header;
