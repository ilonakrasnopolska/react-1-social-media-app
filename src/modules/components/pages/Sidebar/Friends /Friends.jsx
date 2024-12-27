import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = ({ t }) => {
  const friends = useSelector((state) => state.sidebar.friends) || [];
  return (
    <div className={Classes.content}>
      <NavLink
      className={Classes.title}
        to={'/friends'}
      >
        {t("Friends")}
      </NavLink>
      {friends?.length > 0 ? (
        <ul className={Classes.list}>
          {friends.map((friend) => (
            <Friend key={friend.friendId} friend={friend} t={t} />
          ))}
        </ul>
      ) : (
        <div>No friends available</div>
      )}
    </div>
  );
};

export default Friends;
