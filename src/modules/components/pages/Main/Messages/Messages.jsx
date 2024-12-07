import React from "react";
import Classes from './Messages.module.css'
import UsersList from "./UsersList/UsersList";
import ChatWindow from "./ChatWindow/ChatWindow";
import {useSelector} from "react-redux";

const Messages = () => {
  const {users, chats, activeUserId, searchUserText} = useSelector(state => state.dialogs);

  return (
    <div className={Classes.window}>
      <UsersList users={users}
                 activeUserId={activeUserId}
                 searchUserText={searchUserText}
      />
      <ChatWindow chats={chats} />
    </div>
  )
}

export default Messages;
