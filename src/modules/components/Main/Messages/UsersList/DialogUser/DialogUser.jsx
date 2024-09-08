import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
  return (
        <li className={Classes.info}>
          <button className={Classes.button}>
          <NavLink to={props.url}>
            <img className={Classes.avatar} src={props.src}
                 alt='Avatar'/>
            <span className={Classes.name}>{props.name}</span>
          </NavLink>
          </button>
        </li>
  )
}

export default DialogUser;
