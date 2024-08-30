import React from "react";
import Classes from './Messages.module.css'
import UsersList from "./UsersList/UsersList";
import ChatWindow from "./ChatWindow/ChatWindow";

const Messages = () => {
  return (
    <div className={Classes.window}>
      <UsersList />
      <ChatWindow />
    </div>
  )
}

export default Messages;
