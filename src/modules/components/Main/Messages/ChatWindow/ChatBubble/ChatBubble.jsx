import Classes from "./ChatBubble.module.css";
import React from "react";

const ChatBubble = ({avatar, name, message, time}) => {
  return (
    <li className={Classes.item}>
      <div className={Classes.content}>
        <img className={Classes.avatar} src={avatar} alt="avatar"/>
        <div className={Classes.message}>
          <span>{name}</span>
          <span>{message}</span>
        </div>
      </div>
      <span className={Classes.data}>{time}</span>
    </li>
  )
}

export default ChatBubble;
