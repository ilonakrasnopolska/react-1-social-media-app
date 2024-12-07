import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {useDialogsHandler} from "../../../../../../hooks/useDialogsHandler";

const DialogUser = ({ userId, users, activeUserId }) => {
  const currentUser = users.find(user => user.userId === userId);
  const { userId: id, avatar, name } = currentUser || {};
  const {handleClick} = useDialogsHandler(userId);

  return (
    <li className={Classes.info}>
      <NavLink
        to={`/messages/${id}`}
        className={({ isActive }) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        }
        onClick={handleClick}
      >
        <button
          className={`${Classes.button} ${
            activeUserId === id ? Classes.activeButton : ""
          }`}
        >
          <img className={Classes.avatar} src={avatar} alt="Avatar" />
          <span className={Classes.name}>{name}</span>
        </button>
      </NavLink>
    </li>
  );
};

export default DialogUser;
