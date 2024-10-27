import React, { useMemo } from "react";
import {useSelector} from "react-redux";
import Classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = () => {
  const friends = useSelector(state => state.sidebar?.friends) || [];
  // Мемоизация JSX-компонентов для предотвращения повторного создания массива
  const friendComponents = useMemo(() => {
    return friends.map(friend => (
      <Friend key={friend.friendId} friendId={friend.friendId} />
    ));
  }, [friends]);

  // Проверка, если друзей нет
  if (!friends || friends.length === 0) {
    return <div>No friends available</div>;
  }

  return (
    <div className={Classes.content}>
      <span className={Classes.title}>Friends</span>
      <ul className={Classes.list}>
        {friendComponents}
      </ul>
    </div>
  );
};


export default Friends;
