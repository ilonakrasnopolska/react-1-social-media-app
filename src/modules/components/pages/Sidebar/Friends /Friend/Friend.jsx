import React from "react";
import Classes from "./Friend.module.css";

const Friend = ({friend}) => {
  return (
        <li className={Classes.item}>
          <img className={Classes.avatar} src={friend.avatar} alt="avatar"/>
          <a className={Classes.user__name}>{friend.name}</a>
        </li>
  );
}

export default Friend;
