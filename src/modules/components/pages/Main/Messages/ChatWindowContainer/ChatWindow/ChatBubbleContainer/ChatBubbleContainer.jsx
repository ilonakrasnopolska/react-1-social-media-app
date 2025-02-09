import Classes from "../../ChatWindowContainer.module.css";
import ChatBubble from "./ChatBubble/ChatBubble";
import React from "react";

const chatBubbleContainer = ({ currentChat, userId, t }) => {

  if (!currentChat) {
    return <p className={Classes.noChat}>{t('SelectChat')}</p>;
  }

  if (currentChat.messages.length === 0) {
    return <p className={Classes.initialList}>{t('Start')}</p>;
  }

  return currentChat.messages.map(message => (
    <ChatBubble
      userId={userId}
      message={message}
      key={message.id}
      t={t}
    />
  ));
};

export default chatBubbleContainer;
