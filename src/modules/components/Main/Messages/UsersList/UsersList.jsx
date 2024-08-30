import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import avatars from "../../../../helpers/Avatars-src";

const UsersList = () => {
  return (
    <section className="users section">
        <ul className={Classes.list}>
          <DialogUser url='/messages/mark' name='Mark' src={avatars.markPic} />
          <DialogUser url='/messages/vikky' name='Vikky' src={avatars.vikkyPic} />
          <DialogUser url='/messages/sunny' name='Sunny' src={avatars.sunnyPic} />
          <DialogUser url='/messages/phillip' name='Phillip' src={avatars.phillipPic} />
          <DialogUser url='/messages/elon' name='Elon' src={avatars.elonPic} />
          <DialogUser url='/messages/sakura' name='Sakura' src={avatars.sakuraPic} />
          <DialogUser url='/messages/ino' name='Ino' src={avatars.inoPic} />
        </ul>
    </section>
  )
}

export default UsersList;
