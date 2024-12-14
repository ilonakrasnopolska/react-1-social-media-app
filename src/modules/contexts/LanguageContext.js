import { createContext } from 'react';

const LanguageContext = createContext({
  language: 'en',  // Начальное значение для theme
  changeLanguage: () => {},  // Пустая функция по умолчанию
});

export default LanguageContext;
