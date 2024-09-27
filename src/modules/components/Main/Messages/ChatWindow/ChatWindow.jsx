import Classes from "./ChatWindow.module.css";
import React from "react";
import UsersList from "../UsersList/UsersList";
import Chat from "./Chat/Chat";

const ChatWindow = (props) => {
  return (
    <div className={Classes.window}>
      <UsersList users={props.state.dialogsPage.users}/>
      <Chat bubbles={props.state.chatPage.bubbles} />
    </div>
  )
}

export default ChatWindow;
