import Classes from "../../ChatWindowContainer.module.css";
import ChatBubble from "./ChatBubble/ChatBubble";
import React from "react";

const chatBubbleContainer = ({ currentChat }) => {

  if (!currentChat) {
    return <p className={Classes.noChat}>Please select a chat...</p>;
  }

  if (currentChat.messages.length === 0) {
    return <p className={Classes.initialList}>Start conversation...</p>;
  }

  return currentChat.messages.map(message => (
    <ChatBubble
      chatId={currentChat.chatId}
      message={message}
      key={message.id}
    />
  ));
};

export default chatBubbleContainer;
