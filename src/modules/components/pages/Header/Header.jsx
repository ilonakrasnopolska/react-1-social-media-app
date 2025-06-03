import React from "react";
import Classes from "./Header.module.css"; // Импортируем стили для хедера
import { LogoIcon } from "../../../../assets/SVG-icons"; // Импортируем иконку логотипа
import ThemeButton from "./ThemeButton/ThemeButton"; // Импортируем компонент для кнопки смены темы

const Header = () => {
  return (
    <header className={Classes.header}>
      {/* Контейнер для логотипа */}
      <div className={Classes.logo}>
        {/* Отображаем иконку логотипа */}
        <LogoIcon />
      </div>
      {/* Контейнер для кнопки смены темы */}
      <div className={Classes.themeButton}>
        {/* Компонент для переключения темы */}
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
