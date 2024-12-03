import {useSelector} from "react-redux";
import Classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = () => {
  const friends = useSelector(state => state.sidebar.friends) || [];

  return (
    <div className={Classes.content}>
      <span className={Classes.title}>Friends</span>
      {friends?.length > 0 ? (
        <ul className={Classes.list}>
          {friends.map(friend => (
            <Friend key={friend.friendId} friend={friend} />
          ))}
        </ul>
      ) : (
        <div>No friends available</div>
      )}
    </div>
  );
};


export default Friends;
