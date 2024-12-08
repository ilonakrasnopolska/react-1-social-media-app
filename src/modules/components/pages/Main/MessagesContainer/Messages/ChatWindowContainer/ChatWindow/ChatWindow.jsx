import Classes from "./ChatWindow.module.css";
import React from "react";
import NewMessage from "./NewMessage/NewMessage";

const ChatWindow = ({chatContent, showNewMessage, chatId}) => {
  return (
    <section className="chat section">
      <ul className={showNewMessage ? Classes.list : Classes.emptyList}>
        {chatContent}
      </ul>
      {showNewMessage && <NewMessage chatId={chatId} />}
    </section>
  );
};


export default ChatWindow;
