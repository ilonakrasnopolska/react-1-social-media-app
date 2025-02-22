import React from "react";
import { NavLink } from "react-router-dom";
import Classes from "./Friend.module.css";

const Friend = ({friend, t}) => {
  return (
        <li className={Classes.item}>
          <img className={Classes.avatar} src={friend.avatar} alt="avatar"/>
          <NavLink to={'/find_friends'} className={Classes.user__name}>{t(friend.name)}</NavLink>
        </li>
  );
}

export default Friend;
