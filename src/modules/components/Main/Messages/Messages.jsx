import React from "react";
import Classes from './Messages.module.css'
import UsersList from "./UsersList/UsersList";
import Dialogs from "./Dialogs/Dialogs";

const Messages = (props) => {
  return (
    <div className={Classes.window}>
      <UsersList users={props.dialogs.users} />
      <Dialogs messages={props.dialogs.messages} />
    </div>
  )
}

export default Messages;
