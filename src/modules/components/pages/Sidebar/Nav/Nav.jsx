import React from "react";
import Classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import clsx from "clsx";

const Nav = ({t}) => {
  const {nav} = useSelector(state => state.sidebar);

  return (
    <ul className={Classes.list}>
      {nav.map(el => (
        <li className={Classes.item} key={el.id}>
          <NavLink
            className={({isActive}) => clsx(Classes.link, {[Classes.active]: isActive})}
            to={el.url}>
            {t(el.name)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
