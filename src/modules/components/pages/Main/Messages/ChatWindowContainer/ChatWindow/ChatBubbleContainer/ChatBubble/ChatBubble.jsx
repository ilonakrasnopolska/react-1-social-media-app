import Classes from "./ChatBubble.module.css";
import React from "react";
import {useDialogsActions} from "../../../../../../../../hooks/useDialogsActions";

const ChatBubble = ({userId, message, t}) => {
  const {handleDeleteMessage} = useDialogsActions();

  return (
    <li className={Classes.chatItem}>
      <div className={Classes.messageWrapper}>
        <div className={Classes.messageContent}>
          <img className={Classes.avatar} src={message.avatar} alt="avatar"/>
          <div className={Classes.messageInfo}>
            <span>{message.name}</span>
            <div className={Classes.textContent}>
              <span>{message.message}</span>
              <span className={Classes.data}>{message.time}</span>
            </div>
          </div>
        </div>
        <div className={Classes.delete_btn}>
          <button onClick={()=>{handleDeleteMessage(userId, message.id)}}>{t('Delete')}</button>
        </div>
      </div>
    </li>
  )
}

export default ChatBubble;
