import React from "react"; // Импортируем библиотеку React
import Classes from "./LogIn.module.css"; // Импортируем стили для компонента

// Компонент LogIn
const LogIn = () => {
  return (
    <section className="enter section">
      {/* Основной контейнер с классом "enter section" */}
      <div className={Classes.content}>
        {/* Контейнер с классом "content" для стилизации текста */}
        Still on process: {/* Текст, который отображается на странице */}
      </div>
    </section>
  );
};

export default LogIn; // Экспортируем компонент для использования в других частях приложения
