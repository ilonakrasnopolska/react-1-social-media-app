import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import CreateNewChat from "./CreateNewChat/CreateNewChat";

const UsersList = ({users, searchUserText, idFromUrl, filteredContacts, t}) => {
  return (
    <section className="users section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          {users.map(el =>
            <DialogUser
                        userId={el.userId}
                        key={el.userId}
                        users={users}
                        t={t}
                        idFromUrl={idFromUrl}
            />)
          }
        </ul>
        <div>
          <CreateNewChat
            searchUserText={searchUserText}
            filteredContacts={filteredContacts}
            t={t}/>
        </div>
      </div>
    </section>
  )
}

export default UsersList;
