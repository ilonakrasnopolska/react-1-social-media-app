import React from "react";
import Classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Nav = () => {
  const navItems = useSelector(state => state.sidebar.nav);
  const navElements = navItems.map(el => (
    <li className={Classes.item} key={el.id}>
      <NavLink className={({isActive}) => `${Classes.link} ${isActive ? Classes.active : ""}`}
               to={el.url}>{el.name}</NavLink>
    </li>
  ));
  return (
    <ul className={Classes.list}>
      {navElements}
    </ul>
  );
}

export default Nav;
