import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import CreateNewChat from "./CreateNewChat/CreateNewChat";

const UsersList = ({users, searchUserText, filteredContacts, urlId}) => {
  return (
    <section className="users section">
      <ul className={Classes.list}>
        {users.map(el =>
          <DialogUser userId={el.userId}
                      urlId={urlId}
                      key={el.userId}
                      users={users}
          />)
        }
      </ul>
      <CreateNewChat
        searchUserText={searchUserText}
        filteredContacts={filteredContacts}/>
    </section>
  )
}

export default UsersList;
