import Classes from "./ChatBubble.module.css";
import React from "react";

const ChatBubble = (props) => {
  return (
    <li className={Classes.item}>
      <div className={Classes.content}>
        <img className={Classes.avatar} src={props.avatar} alt="avatar"/>
        <div className={Classes.message}>
          <span>{props.name}</span>
          <span>{props.message}</span>
        </div>
      </div>
      <span className={Classes.data}>{props.time}</span>
    </li>
  )
}

export default ChatBubble;
