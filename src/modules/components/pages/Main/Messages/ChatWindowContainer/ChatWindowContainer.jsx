import React from "react";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatBubbleContainer from "./ChatWindow/ChatBubbleContainer/ChatBubbleContainer";


const ChatWindowContainer = ({users, newMessageText, idFromUrl, t}) => {
  const currentUser = users.find(user => user.userId === idFromUrl);
  const currentChat = currentUser?.chat;
  return (
    <ChatWindow
      chatContent={<ChatBubbleContainer currentChat={currentChat} userId={idFromUrl} t={t} />}
      showNewMessage={!!currentChat}
      userId={currentUser?.userId}
      newMessageText={newMessageText}
      t={t}
    />
  );
};


export default ChatWindowContainer;
