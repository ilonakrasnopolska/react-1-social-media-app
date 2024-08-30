import React from "react";
import Classes from "./Sidebar.module.css";
import NavItem from "./NavItem/NavItem";

const Sidebar = () => {
  return (
    <nav className={Classes.nav}>
      <ul className={Classes.list}>
        <NavItem url='/profile' name='Profile' />
        <NavItem url='/messages' name='Messages' />
        <NavItem url='/news' name='News' />
        <NavItem url='/music' name='Music' />
        <NavItem url='/settings' name='Settings' />
      </ul>
    </nav>
  );
}

export default Sidebar;
