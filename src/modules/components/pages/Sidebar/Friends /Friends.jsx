import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = ({ findFriends, friends, t }) => {
  return (
    <div className={Classes.content}>
      <NavLink
       className={({isActive}) => clsx(Classes.title, {[Classes.active]: isActive})}
       to={findFriends.url}>
       {t(findFriends.name)}
      </NavLink>
      {friends?.length > 0 ? (
        <ul className={Classes.list}>
          {friends.map((friend) => (
            <Friend key={friend.userId} friend={friend} t={t} />
          ))}
        </ul>
      ) : (
        <div>No friends available</div>
      )}
    </div>
  );
};

export default Friends;
