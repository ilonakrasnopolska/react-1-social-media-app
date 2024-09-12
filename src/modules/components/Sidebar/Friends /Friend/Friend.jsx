import React from "react";
import Classes from "./Friend.module.css";

const Friend = (props) => {
  return (
        <li className={Classes.item}>
          <img className={Classes.avatar} src={props.src} alt="avatar"/>
          <a className={Classes.user__name}>{props.name}</a>
        </li>
  );
}

export default Friend;
