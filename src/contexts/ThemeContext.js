import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',  // Начальное значение для theme
  toggleTheme: () => {},  // Пустая функция по умолчанию
});

export default ThemeContext;
