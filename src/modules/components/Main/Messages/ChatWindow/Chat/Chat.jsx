import Classes from "./Chat.module.css";
import React from "react";

const Chat = (props) => {
  return (
        <li className={Classes.chat}>
          <button className={Classes.message__btn}>
            <span className={Classes.message}>{props.message}</span>
            <span className={Classes.data}>{props.data}</span>
          </button>
        </li>
  )
}

export default Chat;
