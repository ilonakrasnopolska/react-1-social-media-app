import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
  return (
    <li className={Classes.info}>
      <NavLink
        to={props.url}
        className={({isActive}) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        }
      >
        {({isActive}) => (
          <button className={`${Classes.button} ${isActive ? Classes.activeButton : ""}`}>
            <img className={Classes.avatar} src={props.src} alt="Avatar"/>
            <span className={Classes.name}>{props.name}</span>
          </button>
        )}
      </NavLink>
    </li>
  )
}

export default DialogUser;
