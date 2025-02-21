import Classes from "./UsersList.module.css";
import React from "react";
import { ClipLoader } from "react-spinners";
import DialogUser from "./DialogUser/DialogUser";
import CreateNewChat from "./CreateNewChat/CreateNewChat";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { fetchUsers } from "../../../../../../api/dialogsAPI";

const UsersList = ({users, isLoading, searchUserText, idFromUrl, filteredContacts, t}) => {
  useFetchAndDispatch(() => fetchUsers(users));
  return (
    <section className="users section">
    <div className={Classes.content}>
      {isLoading ? (
        <div className={Classes.spinner}>
          <ClipLoader color="#194770" size={50} />
        </div>
      ) : (
        <ul className={Classes.list}>
          {users.map((el) => (
            <DialogUser
              userId={el.userId}
              key={el.userId}
              users={users}
              t={t}
              idFromUrl={idFromUrl}
            />
          ))}
        </ul>
      )}
      <div>
        <CreateNewChat
          searchUserText={searchUserText}
          filteredContacts={filteredContacts}
          t={t}
        />
      </div>
    </div>
  </section>
);
};

export default UsersList;
