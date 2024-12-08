import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {useDialogsActions} from "../../../../../../../hooks/useDialogsActions";
import Avatar from "../../../../../../common/Avatar";

const DialogUser = ({ userId, users, activeUserId }) => {
  const currentUser = users.find(user => user.userId === userId);
  const { userId: id, avatar, name } = currentUser || {};
  const {setActiveUserHandler} = useDialogsActions(userId);

  return (
    <li className={Classes.info}>
      <NavLink
        to={`/messages/${id}`}
        className={({ isActive }) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        }
        onClick={setActiveUserHandler}
      >
        <button
          className={`${Classes.button} ${
            activeUserId === id ? Classes.activeButton : ""
          }`}
        >
          <Avatar src={avatar} alt="Avatar" className={Classes.avatar}/>
          <span className={Classes.name}>{name}</span>
        </button>
      </NavLink>
    </li>
  );
};

export default DialogUser;
