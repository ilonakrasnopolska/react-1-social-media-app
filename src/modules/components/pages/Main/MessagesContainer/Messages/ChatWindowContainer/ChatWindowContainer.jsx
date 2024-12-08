import React from "react";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatBubble from "./ChatWindow/ChatBubble/ChatBubble";

const ChatWindowContainer = ({chats, activeUserId}) => {
  const currentChat = chats.find(chat => chat.chatId === Number(activeUserId));

  const chatContent = (() => {
    if (!currentChat) {
      return <li>Please select a chat...</li>;
    }

    if (currentChat.messages.length === 0) {
      return <li>Start conversation...</li>;
    }

    return currentChat.messages.map(message => (
      <ChatBubble
        chatId={currentChat.chatId}
        messageId={message.id}
        key={message.id}
      />
    ));
  })();

  return (
    <ChatWindow
      chatContent={chatContent}
      showNewMessage={!!currentChat}
      chatId={currentChat?.chatId}
    />
  );
};


export default ChatWindowContainer;
