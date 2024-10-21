import React from "react";
import {useSelector} from "react-redux";
import Classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = () => {
  const friends = useSelector(state => state.sidebar?.friends || []);

  // Проверка, если friends нет
  if (!friends || friends.length === 0) {
    return <div>No friends available</div>; // Возвращаем, если друзей нет
  }

  const friendComponents = friends.map(friend =>
    <Friend name={friend.name} src={friend.avatar} key={friend.friendId}/>
  );

  return (
    <div className={Classes.content}>
      <span className={Classes.title}>Friends</span>
      <ul className={Classes.list}>
        {friendComponents}
      </ul>
    </div>
  );
}


export default Friends;
