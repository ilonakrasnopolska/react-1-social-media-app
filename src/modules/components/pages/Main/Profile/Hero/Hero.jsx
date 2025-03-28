import React from "react";
import Classes from "./Hero.module.css"; // Импортируем стили для компонента Hero

const Hero = ({ wallpaper }) => {
  return (
    // Секция для отображения обоев в профиле
    <section className="hero">
      <div className={Classes.background}>
        {" "}
        {/* Используем CSS-модуль для фона */}
        <img src={wallpaper} alt="wallpaper" />{" "}
        {/* Отображаем изображение обоев, переданное через пропс */}
      </div>
    </section>
  );
};

export default Hero;
