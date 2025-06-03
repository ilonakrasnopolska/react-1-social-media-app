import { NavLink } from "react-router-dom"; // Импорт компонента NavLink из react-router-dom для создания навигационной ссылки
import clsx from "clsx"; // Импорт утилиты clsx для условного объединения CSS-классов
import Classes from "./Friends.module.css"; // Импорт CSS-модуля для стилизации компонента
import Friend from "./Friend/Friend"; // Импорт компонента Friend, который отображает одного друга

const Friends = ({ findFriends, friends, t }) => {
  return (
    <div className={Classes.content}>
      {/* Навигационная ссылка, активная при совпадении с текущим путём */}
      <NavLink
        // clsx добавляет CSS-классы: если isActive = true, то добавляется класс active
        className={({ isActive }) =>
          clsx(Classes.title, { [Classes.active]: isActive })
        }
        to={findFriends.url} // путь для перехода
      >
        {/* Отображение названия раздела с переводом */}
        {t(findFriends.name)}
      </NavLink>
      {/* Если есть друзья, отображаем их список */}
      {friends?.length > 0 ? (
        <ul className={Classes.list}>
          {friends.map((friend) => (
            // Для каждого друга создаём компонент Friend
            <Friend key={friend.userId} friend={friend} t={t} />
          ))}
        </ul>
      ) : (
        // Если список друзей пуст, выводим сообщение
        <div>{t('Empty')}</div>
      )}
    </div>
  );
};

export default Friends;
