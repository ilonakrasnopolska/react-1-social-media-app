import React from "react";
import Classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
  let items = [
    {
      name: "Profile",
      url: "/profile",
      id: 1,
    },
    {
      name: "Messages",
      url: "/messages",
      id: 2,
    },
    {
      name: "News",
      url: "/news",
      id: 3,
    },
    {
      name: "Music",
      url: "/music",
      id: 4,
    },
    {
      name: "Settings",
      url: "/settings",
      id: 5,
    },
  ]
  let navItems = items.map(el =>
    <li className={Classes.item} key={el.id}>
      <NavLink className={({isActive}) => `${Classes.link} ${isActive ? Classes.active : ""}`}
               to={el.url}>{el.name}</NavLink>
    </li>)
  return (
    <ul className={Classes.list}>
      {navItems}
    </ul>
  );
}

export default Nav;
