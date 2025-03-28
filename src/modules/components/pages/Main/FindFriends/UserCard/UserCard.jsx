import { NavLink } from "react-router-dom";
import Avatar from "../../../../common/Avatar";
import Classes from "../UserCard/UserCard.module.css";

// Компонент карточки пользователя
const UserCard = ({ friend, t, handleFollowToggle, handleStartChat }) => {
  return (
    <li className={Classes.friend_card}>
      {" "}
      {/* Обертка для карточки друга */}
      <div className={Classes.content}>
        <div className={Classes.avatar_wrapper}>
          {/* Компонент для отображения аватара */}
          <Avatar src={friend.avatar} alt="Avatar" className={Classes.avatar} />

          {/* Кнопка для подписки/отписки */}
          <button
            onClick={() => handleFollowToggle(friend)} // Вызов функции при клике
            className={Classes[friend.isFollow ? "btn_unFollow" : "btn_follow"]} // Классы для кнопки в зависимости от состояния подписки
          >
            {t(friend.isFollow ? "Unfollow" : "Follow")} {/* Текст на кнопке */}
          </button>
        </div>

        <div className={Classes.user_info_wrapper}>
          {/* Имя пользователя */}
          <h3 className={Classes.title}>{friend.name}</h3>

          {/* Статус пользователя (онлайн/офлайн) */}
          <p className={Classes.status}>
            {friend.isActive ? "Offline" : "Online"}
          </p>

          {/* Ссылка на страницу сообщений с этим другом */}
          <NavLink
            onClick={() => {
              handleStartChat(friend, friend.userId); // Начать чат с другом
            }}
            className={Classes.button}
            to={`/messages/${friend.userId}`} // Переход на страницу чата с этим другом
          >
            {t("SendMessage")} {/* Кнопка для отправки сообщения */}
          </NavLink>
        </div>
      </div>
      {/* Информация о городе пользователя */}
      <div className={Classes.city}>
        <h3>City:</h3>
        <span>{friend.city}</span> {/* Город друга */}
      </div>
    </li>
  );
};

export default UserCard;
