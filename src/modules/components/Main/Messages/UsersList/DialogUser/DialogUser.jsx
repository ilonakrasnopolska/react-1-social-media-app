import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const DialogUser = ({ userId }) => {
  const users = useSelector(state => state.dialogs.users);
  const currentUser = users.find(user => user.userId === userId);
  return (
    <li className={Classes.info}>
      <NavLink
        to={`/messages/${currentUser.userId}`}
        className={({ isActive }) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        }
      >
        <button
          className={`${Classes.button} ${currentUser.userId === userId ? Classes.activeButton : ""}`}
        >
          <img className={Classes.avatar} src={currentUser.avatar} alt="Avatar" />
          <span className={Classes.name}>{currentUser.name}</span>
        </button>
      </NavLink>
    </li>
  )
}

export default DialogUser;
