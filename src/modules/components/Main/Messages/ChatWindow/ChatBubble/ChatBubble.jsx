import Classes from "./ChatBubble.module.css";
import React from "react";
import {useSelector} from "react-redux";

const ChatBubble = ({chatId, messageId}) => {
  const chats = useSelector(state => state.dialogs.chats);
  const currentChat = chats.find(chat => chat.chatId === chatId);
  const message = currentChat.messages.find(message => message.id === messageId);
  return (
    <li className={Classes.item}>
      <div className={Classes.content}>
        <img className={Classes.avatar} src={message.avatar} alt="avatar"/>
        <div className={Classes.message}>
          <span>{message.name}</span>
          <span>{message.message}</span>
        </div>
      </div>
      <span className={Classes.data}>{message.time}</span>
    </li>
  )
}

export default ChatBubble;
