import Classes from "./ChatBubble.module.css"; // Импорт CSS классов для стилизации
import React from "react";

// Компонент для отображения одного сообщения в чате
const ChatBubble = ({ message, t, openModal }) => {
  return (
    <li className={Classes.chatItem}>
      <div className={Classes.messageWrapper}>
        <div className={Classes.messageContent}>
          <img className={Classes.avatar} src={message.avatar} alt="avatar" />
          <div className={Classes.messageInfo}>
            <span>{message.name}</span>
            <div className={Classes.textContent}>
              <span>{message.message}</span>
              <span className={Classes.data}>{message.time}</span>
            </div>
          </div>
        </div>
        <div className={Classes.delete_btn}>
          <button onClick={openModal}>
            {t("Delete")}
          </button>
        </div>
      </div>
    </li>
  );
};


export default ChatBubble;
