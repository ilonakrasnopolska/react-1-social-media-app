import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import CreateNewChat from "./CreateNewChat/CreateNewChat";

const UsersList = ({users, searchUserText, filteredContacts, urlId, t}) => {
  return (
    <section className="users section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          {users.map(el =>
            <DialogUser userId={el.userId}
                        urlId={urlId}
                        key={el.userId}
                        users={users}
                        t={t}
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
