import Classes from "./ChatWindow.module.css";
import React from "react";
import NewMessage from "./NewMessage/NewMessage";

const ChatWindow = ({chatContent, showNewMessage, chatId, newMessageText, t}) => {
  return (
    <section className="chat section">
      <ul className={showNewMessage ? Classes.list : Classes.emptyList}>
        {chatContent}
      </ul>
      {showNewMessage && <NewMessage chatId={chatId} newMessageText={newMessageText} t={t} />}
    </section>
  );
};


export default ChatWindow;