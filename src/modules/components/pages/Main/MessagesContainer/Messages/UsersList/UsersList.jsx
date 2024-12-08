import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import CreateNewChat from "./CreateNewChat/CreateNewChat";

const UsersList = ({users, contacts, activeUserId, searchUserText}) => {
  return (
    <section className="users section">
      <ul className={Classes.list}>
        {users.map(el =>
          <DialogUser userId={el.userId}
                      key={el.userId}
                      users={users}
                      activeUserId={activeUserId}/>)
        }
      </ul>
      <CreateNewChat contacts={contacts} searchUserText={searchUserText}/>
    </section>
  )
}

export default UsersList;
