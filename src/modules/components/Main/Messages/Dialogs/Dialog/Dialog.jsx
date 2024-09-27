import Classes from "./Dialog.module.css";
import React from "react";

const Dialog = (props) => {
  return (
        <li className={Classes.chat}>
          <button className={Classes.message__btn}>
            <div className={Classes.message}>
              <img className={Classes.avatar} src={props.avatar} alt="avatar"/>
              <span>{props.message}</span>
            </div>
            <span className={Classes.data}>{props.data}</span>
          </button>
        </li>
  )
}

export default Dialog;
