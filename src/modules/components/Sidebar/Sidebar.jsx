import React from "react";
import Classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className={Classes.nav}>
      <ul className={Classes.list}>
        <li className={Classes.item}>
          <NavLink className={({ isActive }) => `${Classes.link} ${isActive ? Classes.active : ""}`}
                   to="/profile">Profile</NavLink>
        </li>
        <li className={Classes.item}>
          <NavLink className={({ isActive }) => `${Classes.link} ${isActive ? Classes.active : ""}`}
                   to="/messages">Messages</NavLink>
        </li>
        <li className={Classes.item}>
          <NavLink className={({ isActive }) => `${Classes.link} ${isActive ? Classes.active : ""}`}
                   to="/news">News</NavLink>
        </li>
        <li className={Classes.item}>
          <NavLink className={({ isActive }) => `${Classes.link} ${isActive ? Classes.active : ""}`}
                   to="/music">Music</NavLink>
        </li>
        <li className={Classes.item}>
          <NavLink className={({ isActive }) => `${Classes.link} ${isActive ? Classes.active : ""}`}
                   to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
