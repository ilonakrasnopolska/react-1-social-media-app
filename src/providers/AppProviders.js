import React, { useState, useCallback, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext"; // Импорт контекста для темы
import LanguageContext from "../contexts/LanguageContext"; // Импорт контекста для языка
import getTranslation from "../locales/getTranslation"; // Функция для получения перевода
import translations from "../locales/translations"; // Данные с переводами для разных языков

// Компонент, который предоставляет контексты для темы и языка
const AppProviders = ({ children }) => {
  // Состояние для текущей темы (по умолчанию 'light')
  const [theme, setTheme] = useState("light");

  // Функция для переключения темы между 'light' и 'dark'
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // Состояние для текущего языка (по умолчанию 'en' - английский)
  const [language, setLanguage] = useState("en");

  // Функция для смены языка
  const changeLanguage = useCallback((lang) => {
    setLanguage(lang); // Обновляет язык
  }, []);

  // Функция для получения перевода по ключу
  const t = useCallback(
    (key) => {
      const translationsForLang = translations[language]; // Получаем переводы для выбранного языка
      return getTranslation(translationsForLang, key); // Возвращаем перевод для переданного ключа
    },
    [language] // Зависит от языка
  );

  // Эффект для изменения темы на уровне body элемента (для применения темной или светлой темы)
  useEffect(() => {
    document.body.setAttribute("data-theme", theme); // Применяем атрибут 'data-theme' на body
  }, [theme]); // Этот эффект будет вызываться каждый раз при изменении темы

  // Возвращаем компонент с контекстами для темы и языка
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, changeLanguage, t }}>
        {children}{" "}
        {/* Вложенные компоненты, которым будут доступны контексты */}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AppProviders;
