import React from "react"; // Импортируем React для работы с JSX
import socialLinks from "./SocialLinks"; // Импортируем массив с социальными ссылками и иконками
import Classes from "./Footer.module.css"; // Импортируем стили для футера

const Footer = () => {
  return (
    <footer className={Classes.footer}>
      {" "}
      {/* Обертка футера с классом для стилизации */}
      <div className={Classes.wrapper}>
        {" "}
        {/* Вложенная обертка для элементов футера */}
        <ul className={Classes.list}>
          {" "}
          {/* Список социальных сетей */}
          {/* Проходим по массиву socialLinks и отображаем каждый элемент как ссылку с иконкой */}
          {socialLinks.map(({ href, icon }, index) => (
            <li key={index}>
              {" "}
              {/* Для каждого элемента списка создаем <li> с уникальным ключом */}
              <a
                className={Classes.icon} // Класс для стилизации иконки
                href={href} // Устанавливаем ссылку для социальной сети
                target="_blank" // Открываем ссылку в новой вкладке
                rel="noopener noreferrer" // Обеспечиваем безопасность при открытии ссылки в новой вкладке
              >
                {icon} {/* Отображаем иконку для социальной сети */}
              </a>
            </li>
          ))}
        </ul>
        <div className={Classes.copyright}>
          {" "}
          {/* Блок с текстом о копирайте */}
          Copyright @ 2024 Chakra
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Экспортируем компонент Footer для использования в других частях приложения
