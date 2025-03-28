import { Facebook, Instagram, Telegram } from "../../../../assets/SVG-icons"; // Импортируем компоненты иконок из папки с SVG-иконками
import React from "react"; // Импортируем React для работы с JSX

// Массив объектов для социальных ссылок с соответствующими иконками
const socialLinks = [
  {
    href: "https://www.instagram.com/", // Ссылка на Instagram
    icon: <Instagram /> // Иконка для Instagram
  },
  {
    href: "https://www.facebook.com/", // Ссылка на Facebook
    icon: <Facebook /> // Иконка для Facebook
  },
  {
    href: "https://web.telegram.org/a/", // Ссылка на Telegram
    icon: <Telegram /> // Иконка для Telegram
  }
];

// Экспортируем массив социальных ссылок для использования в других компонентах
export default socialLinks;
