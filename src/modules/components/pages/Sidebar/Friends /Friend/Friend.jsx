import React from "react";
import Classes from "./Friend.module.css";

const Friend = ({friend, t}) => {
  return (
        <li className={Classes.item}>
          <img className={Classes.avatar} src={friend.avatar} alt="avatar"/>
          <a className={Classes.user__name}>{t(friend.name)}</a>
        </li>
  );
}

export default Friend;
