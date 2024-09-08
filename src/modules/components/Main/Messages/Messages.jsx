import React from "react";
import Classes from './Messages.module.css'
import UsersList from "./UsersList/UsersList";
import ChatWindow from "./ChatWindow/ChatWindow";

const Messages = (props) => {
  return (
    <div className={Classes.window}>
      <UsersList users={props.dialogs.users} />
      <ChatWindow messages={props.dialogs.messages} />
    </div>
  )
}

export default Messages;
