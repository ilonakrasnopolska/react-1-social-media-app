import React from "react";
import Classes from './Header.module.css'
import {LogoIcon} from "../../../../redux/Assets/SVG-icons";

const Header = () => {
  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>
        <LogoIcon/>
      </div>
    </header>
  );
}

export default Header;
