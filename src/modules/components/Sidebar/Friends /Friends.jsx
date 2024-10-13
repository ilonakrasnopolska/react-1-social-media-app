import React from "react";
import Classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  const friends = props.friends.map(friend =>
    <Friend name={friend.name} src={friend.avatar} key={friend.friendId}/>
  )
  return (
    <div className={Classes.content}>
      <span className={Classes.title}>Friends</span>
      <ul className={Classes.list}>
        {friends}
      </ul>
    </div>
  );
}

export default Friends;
