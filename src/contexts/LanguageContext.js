import { createContext } from 'react';


const LanguageContext = createContext({
  language: 'en',
  changeLanguage: () => {},
  t: (key) => key,
});

export default LanguageContext;
