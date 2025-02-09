import React from "react";
import Classes from './Header.module.css'
import {LogoIcon} from "../../../../assets/SVG-icons";
import ThemeButton from "./ThemeButton/ThemeButton";

const Header = () => {
  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>
        <LogoIcon/>
      </div>
      <div className={Classes.themeButton}>
        <ThemeButton/>
      </div>
    </header>
  );
}

export default Header;
