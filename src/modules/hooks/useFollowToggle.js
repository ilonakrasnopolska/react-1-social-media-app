import { useDispatch, useSelector } from "react-redux";
import {
  follow,
  unFollow,
} from "../../redux/FindFriendsReducer/find-friends-reducer";
import {
  followFriend,
  unFollowFriend,
} from "../../redux/ProfileReducer/profile-reducer";
import { toggleFriendFollow } from "../../redux/SidebarReducer/sidebar-reducer";

// Кастомный хук для переключения состояния подписки (follow/unfollow)
export const useFollowToggle = () => {
  const sidebarFriends = useSelector((state) => state.sidebar.friends);
  const dispatch = useDispatch(); // Получаем функцию dispatch из Redux

  /**
   * Функция переключения подписки для конкретного пользователя
   * @param {Object} friend - объект пользователя, содержащий isFollow
   */
  const toggle = (friend) => {
    //Проверяем есть ли пользователь в sidebar
    const isInSidebar = sidebarFriends.some((f) => f.userId === friend.userId);
    if (friend.isFollow) {
      // Если уже подписаны — отписываемся в state friends
      dispatch(unFollow({ friend }));
      // Если уже подписаны — отписываемся в state profiile
      dispatch(unFollowFriend({ friend }));
      if (isInSidebar) {
        dispatch(
          toggleFriendFollow({ userId: friend.userId, isFollow: false })
        );
      }
    } else {
      // Если уже подписаны — отписываемся в state friends
      dispatch(follow({ friend }));
      // Если уже подписаны — отписываемся в state profiile
      dispatch(followFriend({ friend }));
      if (isInSidebar) {
        dispatch(toggleFriendFollow({ userId: friend.userId, isFollow: true }));
      }
    }
  };

  return toggle; // Возвращаем функцию toggle для использования в компонентах
};
