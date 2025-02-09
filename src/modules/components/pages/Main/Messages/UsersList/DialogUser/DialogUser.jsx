import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {useActiveDialogUser} from "../../../../../../hooks/useActiveDialogUser";
import Avatar from "../../../../../common/Avatar";

const DialogUser = ({users, userId, idFromUrl}) => {
  const { id, avatar, name, isActive, handleClick } = useActiveDialogUser(userId, users, idFromUrl);
  return (
    <li className={Classes.info}>
      <NavLink
        to={`/messages/${id}`}
        className={({ isActive }) => `${Classes.link} ${isActive ? Classes.active : ""}`}
        onClick={handleClick}
      >
        <button className={`${Classes.button} ${isActive ? Classes.activeButton : ""}`}>
          <Avatar src={avatar} alt="Avatar" className={Classes.avatar}/>
          <span className={Classes.name}>{name}</span>
        </button>
      </NavLink>
    </li>
  );
};

export default DialogUser;
