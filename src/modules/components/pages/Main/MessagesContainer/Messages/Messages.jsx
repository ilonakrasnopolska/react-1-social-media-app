import React from "react";
import Classes from './Messages.module.css';
import UsersList from "./UsersList/UsersList";
import ChatWindowContainer from "./ChatWindowContainer/ChatWindowContainer";

const Messages = ({ dialogs }) => {
  return (
    <div className={Classes.window}>
      <UsersList
        users={dialogs.users}
        contacts={dialogs.contacts}
        activeUserId={dialogs.activeUserId}
        searchUserText={dialogs.searchUserText}
      />
      <ChatWindowContainer chats={dialogs.chats} activeUserId={dialogs.activeUserId}/>
    </div>
  );
};

export default Messages;
