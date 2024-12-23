import React, { useState, useCallback, useEffect } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import LanguageContext from '../contexts/LanguageContext';
import getTranslation from '../locales/getTranslation';
import translations from '../locales/translations';


const AppProviders = ({ children }) => {
  // Состояние для темы
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // Состояние для языка
  const [language, setLanguage] = useState('en');

  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
  }, []);

   // Функция для получения перевода
   const t = useCallback(
    (key) => {
      const translationsForLang = translations[language];
      return getTranslation(translationsForLang, key);
    },
    [language]
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, changeLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AppProviders;
