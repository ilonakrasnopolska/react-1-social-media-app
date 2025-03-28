import React from "react";
import { useDispatch } from "react-redux";
import { useDialogsActions } from "../../../../../hooks/useDialogsActions";
import {
  follow,
  unFollow,
} from "../../../../../../redux/FindFriendsReducer/find-friends-reducer";
import UserCard from "./UserCard";

// Контейнер для карточки пользователя
const UserCardContainer = ({ friend, t }) => {
  // Получаем доступ к dispatch для отправки действий в Redux
  const dispatch = useDispatch();

  // Хук для работы с действиями диалогов
  const { handleStartChat } = useDialogsActions();

  // Функция для переключения состояния "следить" / "не следить"
  const handleFollowToggle = (friend) => {
    // Если пользователь уже в списке подписок, отменяем подписку
    if (friend.isFollow) {
      dispatch(unFollow({ friend }));
    } else {
      // Если не подписан — добавляем в подписки
      dispatch(follow({ friend }));
    }
  };

  return (
    // Передаем все необходимые данные в компонент UserCard
    <UserCard
      friend={friend}
      t={t}
      handleFollowToggle={handleFollowToggle} // Функция для переключения подписки
      handleStartChat={handleStartChat} // Функция для начала чата
    />
  );
};

export default UserCardContainer;
