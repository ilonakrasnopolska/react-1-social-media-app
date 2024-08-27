import Classes from "./DialogUser.module.css";
import React from "react";

const DialogUser = (props) => {
  return (
        <li className={Classes.info}>
          {props.name}
        </li>
  )
}

export default DialogUser;
