import React from "react";
import Classes from "./Settings.module.css"; // Импорт стилей для компонента
import { NavLink } from "react-router-dom"; // Импорт NavLink для навигации по маршрутам

const Settings = ({ t, enhancedSettingsOptions }) => {
  return (
    <section className="settings section">
      {" "}
      {/* Обертка для секции настроек */}
      <ul className={Classes.list}>
        {" "}
        {/* Список настроек */}
        {enhancedSettingsOptions.map(
          (
            option,
            index // Перебор всех опций в enhancedSettingsOptions
          ) => (
            <li key={index} className={Classes.item}>
              {" "}
              {/* Каждый элемент списка */}
              <NavLink to={option.title}>{t(option.title)}</NavLink>{" "}
              {/* Навигация по id опции с переводом title */}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Settings;
