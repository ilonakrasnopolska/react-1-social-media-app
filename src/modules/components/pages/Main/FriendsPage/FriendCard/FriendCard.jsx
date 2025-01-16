import Classes from "../FriendCard/FriendCard.module.css";
import Avatar from "../../../../common/Avatar";
import { NavLink } from "react-router-dom";
import { useDialogsActions } from "../../../../../hooks/useDialogsActions";

const FriendCard = ({ friend, t }) => {
  const { handleStartChat } = useDialogsActions();
  return (
    <li className={Classes.friend_card}>
      <div className={Classes.content}>
        <div className={Classes.avatar_wrapper}>
           <Avatar src={friend.avatar} alt="Avatar" className={Classes.avatar} />
           <button className={Classes.btn_follow}>{t(friend.isFollow ? "Unfollow" : "Follow")}</button>
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
      <button
          onClick={() => alert("Still on work")}
          className={Classes.delete}
        >
          ...
        </button>
    </li>
  );
};

export default FriendCard;
