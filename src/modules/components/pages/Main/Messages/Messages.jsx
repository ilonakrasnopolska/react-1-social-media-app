import React from "react";
import Classes from './Messages.module.css';
import UsersList from "./UsersList/UsersList";
import ChatWindowContainer from "./ChatWindowContainer/ChatWindowContainer";

const Messages = ({dialogs, idFromUrl, t}) => {
  return (
    <div className={Classes.window}>
      <UsersList
        users={dialogs.users}
        idFromUrl={idFromUrl}
        searchUserText={dialogs.searchUserText}
        filteredContacts={dialogs.filteredContacts}
        t={t}
      />
      <ChatWindowContainer users={dialogs.users}
                           idFromUrl={idFromUrl}
                           newMessageText={dialogs.newMessageText}
                           t={t}
      />
    </div>
  );
};

export default Messages;
