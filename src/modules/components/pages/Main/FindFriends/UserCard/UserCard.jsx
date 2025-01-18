import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Classes from "../UserCard/UserCard.module.css";
import Avatar from "../../../../common/Avatar";
import { useDialogsActions } from "../../../../../hooks/useDialogsActions";
import { follow, unFollow } from "../../../../../../redux/FindFriendsReducer/find-friends-reducer";

const UserCard = ({ friend, t }) => {
  const dispatch = useDispatch();
  const { handleStartChat } = useDialogsActions();
  return (
    <li className={Classes.friend_card}>
      <div className={Classes.content}>
        <div className={Classes.avatar_wrapper}>
           <Avatar src={friend.avatar} alt="Avatar" className={Classes.avatar} />
           <button
             onClick={() => dispatch(friend.isFollow ? unFollow({ friend }) : follow({ friend }))}
              className={Classes[friend.isFollow ? "btn_unFollow" : "btn_follow"]}>
          {t(friend.isFollow ? "Unfollow" : "Follow")}
           </button>
      </div>
        <div className={Classes.user_info_wrapper}>
          <h3 className={Classes.title}>{t(friend.name.en)}</h3>
          <p className={Classes.status}>{friend.status}</p>
          <NavLink
            onClick={() => {
              handleStartChat(friend, friend.userId);
            }}
            className={Classes.button}
            to={`/messages/${friend.userId}`}
          >
            {t("SendMessage")}
          </NavLink>
        </div>

      </div>
    </li>
  );
};

export default UserCard;
