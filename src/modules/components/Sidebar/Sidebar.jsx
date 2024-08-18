import React from "react";
import Classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={Classes.nav}>
      <ul className={Classes.list}>
        <li className={Classes.item}>
          <a className={Classes.link} href="#">Profile</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="#">Messages</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="#">News</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="#">Music</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
