import React from "react";
import Classes from './Messages.module.css';
import UsersList from "./UsersList/UsersList";
import ChatWindowContainer from "./ChatWindowContainer/ChatWindowContainer";

const Messages = ({dialogs, urlId, t}) => {
  return (
    <div className={Classes.window}>
      <UsersList
        users={dialogs.users}
        searchUserText={dialogs.searchUserText}
        filteredContacts={dialogs.filteredContacts}
        urlId={urlId}
        t={t}
      />
      <ChatWindowContainer chats={dialogs.chats}
                           urlId={urlId}
                           newMessageText={dialogs.newMessageText}
                           t={t}
      />
    </div>
  );
};

export default Messages;
