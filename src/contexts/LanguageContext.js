import { createContext } from 'react';

// Создание контекста для управления языком в приложении
const LanguageContext = createContext({
  // Устанавливаем начальный язык как английский
  language: 'en',

  // Функция для изменения языка (по умолчанию пустая)
  changeLanguage: () => {},

  // Функция для перевода ключей в соответствующие текстовые строки (по умолчанию возвращает ключ)
  t: (key) => key,
});

export default LanguageContext;
