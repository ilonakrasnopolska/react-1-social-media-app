import React from "react";
import Classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={Classes.nav}>
      <ul className={Classes.list}>
        <li className={Classes.item}>
          <a className={Classes.link} href="/profile">Profile</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="/messages">Messages</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="/news">News</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="/music">Music</a>
        </li>
        <li className={Classes.item}>
          <a className={Classes.link} href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
