import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import {users} from "../../../../helpers/MessagesData";

const UsersList = () => {
  return (
    <section className="users section">
        <ul className={Classes.list}>
          <DialogUser url={users[0].url} name={users[0].name} src={users[0].avatar} />
          <DialogUser url={users[1].url} name={users[1].name} src={users[1].avatar} />
          <DialogUser url={users[2].url} name={users[2].name} src={users[2].avatar} />
          <DialogUser url={users[3].url} name={users[3].name} src={users[3].avatar} />
          <DialogUser url={users[4].url} name={users[4].name} src={users[4].avatar} />
          <DialogUser url={users[5].url} name={users[5].name} src={users[5].avatar} />
          <DialogUser url={users[6].url} name={users[6].name} src={users[6].avatar} />
        </ul>
    </section>
  )
}

export default UsersList;
