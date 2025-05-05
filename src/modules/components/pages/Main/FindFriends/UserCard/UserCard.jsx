import Avatar from "../../../../common/Avatar";
import Classes from "../UserCard/UserCard.module.css";

// Компонент карточки пользователя
const UserCard = ({ friend, t, handleFollowToggle, openModal }) => {
  return (
    <li className={Classes.friend_card}>
      <div className={Classes.content}>
        <div className={Classes.avatar_wrapper}>
          <Avatar src={friend.avatar} alt="Avatar" className={Classes.avatar} />
          <button
            onClick={() => handleFollowToggle(friend)}
            className={Classes[friend.isFollow ? "btn_unFollow" : "btn_follow"]}
          >
            {t(friend.isFollow ? "Unfollow" : "Follow")}
          </button>
        </div>

        <div className={Classes.user_info_wrapper}>
          <h3 className={Classes.title}>{friend.name}</h3>
          <p className={Classes.status}>
            {friend.isActive ? "Offline" : "Online"}
          </p>

          {/* Кнопка, открывающая модальное окно */}
          <button
            onClick={() => openModal(friend)}
            className={Classes.button}
          >
            {t("SendMessage")}
          </button>
        </div>
      </div>

      <div className={Classes.city}>
        <h3>City:</h3>
        <span>{friend.city}</span>
      </div>
    </li>
  );
};

export default UserCard;
