import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const DialogUser = ({ url, name, src }) => {
  return (
    <li className={Classes.info}>
      <NavLink
        to={url}
        className={({isActive}) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        }
      >
        {({isActive}) => (
          <button className={`${Classes.button} ${isActive ? Classes.activeButton : ""}`}>
            <img className={Classes.avatar} src={src} alt="Avatar"/>
            <span className={Classes.name}>{name}</span>
          </button>
        )}
      </NavLink>
    </li>
  )
}

export default DialogUser;
