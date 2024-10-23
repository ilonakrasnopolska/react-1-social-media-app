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
        to={currentUser.url}
        className={({isActive}) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        }
      >
        {({isActive}) => (
          <button className={`${Classes.button} ${isActive ? Classes.activeButton : ""}`}>
            <img className={Classes.avatar} src={currentUser.avatar} alt="Avatar"/>
            <span className={Classes.name}>{currentUser.name}</span>
          </button>
        )}
      </NavLink>
    </li>
  )
}

export default DialogUser;
