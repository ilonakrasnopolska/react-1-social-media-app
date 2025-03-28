import React, { useContext } from "react"; // Импортируем необходимые модули
import ThemeContext from "../../../../../contexts/ThemeContext"; // Импортируем контекст для темы
import { DarkTheme, LightTheme } from "../../../../../assets/SVG-icons"; // Импортируем иконки для светлой и темной темы

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Используем контекст для получения текущей темы и функции для переключения темы

  return (
    <button onClick={toggleTheme}>
      {" "}
      {/* Обработчик клика для переключения темы */}
      {theme === "light" ? <DarkTheme /> : <LightTheme />}{" "}
      {/* Если текущая тема светлая, показываем иконку для темной темы, иначе показываем для светлой */}
    </button>
  );
};

export default ThemeButton; // Экспортируем компонент
