import React from "react";
import Classes from "./Friend.module.css";
import {useSelector} from "react-redux";

const Friend = ({friendId}) => {
  const friend = useSelector(state => state.sidebar.friends.find(friend => friend.friendId === friendId));
  return (
        <li className={Classes.item}>
          <img className={Classes.avatar} src={friend.avatar} alt="avatar"/>
          <a className={Classes.user__name}>{friend.name}</a>
        </li>
  );
}

export default Friend;
