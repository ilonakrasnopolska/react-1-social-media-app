import React, { useContext } from 'react';
import  ThemeContext from '../../../../contexts/ThemeContext';
import {DarkTheme, LightTheme} from "../../../../../redux/assets/SVG-icons";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <DarkTheme /> : <LightTheme />}
    </button>
  );
};

export default ThemeButton;
