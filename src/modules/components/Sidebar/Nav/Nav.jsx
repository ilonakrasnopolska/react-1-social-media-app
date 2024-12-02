import React from "react";
import Classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import clsx from "clsx";

const Nav = () => {
  const {nav} = useSelector(state => state.sidebar);
  const renderNavItems = () => {
    return nav.map(el => (
      <li className={Classes.item} key={el.id}>
        <NavLink
          className={({isActive}) => clsx(Classes.link, {[Classes.active]: isActive})}
          to={el.url}>
          {el.name}
        </NavLink>
      </li>
    ));
  };

  return <ul className={Classes.list}>{renderNavItems()}</ul>;
};

export default Nav;
