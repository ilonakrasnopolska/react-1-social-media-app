import React from "react";
import Classes from "./NavItem.module.css";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
  return (
        <li className={Classes.item}>
          <NavLink className={({ isActive }) => `${Classes.link} ${isActive ? Classes.active : ""}`}
                   to={props.url}>{props.name}</NavLink>
        </li>
  )
}

export default NavItem;
