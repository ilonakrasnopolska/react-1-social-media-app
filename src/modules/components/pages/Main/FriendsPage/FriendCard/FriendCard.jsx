import Classes from "../FriendCard/FriendCard.module.css";
import Avatar from "../../../../common/Avatar";
import { NavLink } from "react-router-dom";
import { useDialogsActions } from "../../../../../hooks/useDialogsActions";

const FriendCard = ({ friend, t }) => {
  const { handleStartChat } = useDialogsActions();
  return (
    <li className={Classes.friend_card}>
      <div className={Classes.content}>
      <Avatar src={friend.avatar} alt="Avatar" className={Classes.avatar} />
        <div>
          <h3 className={Classes.title}>{t(friend.name.en)}</h3>
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
