import Classes from "./DialogUser.module.css";
import React from "react";

const DialogUser = (props) => {
  return (
        <li className={Classes.info}>
          <button className={Classes.button}>
            <img className={Classes.avatar} src={props.src}
                 alt='Avatar'/>
            <span className={Classes.name}>{props.name}</span>
          </button>
        </li>
  )
}

export default DialogUser;
