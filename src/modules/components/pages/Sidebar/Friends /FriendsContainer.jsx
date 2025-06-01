import { useSelector } from "react-redux"; // Импортируем хук useSelector из Redux для получения состояния из хранилища
import Friends from "./Friends"; // Импортируем компонент Friends
import { useFetchAndDispatch } from "../../../../hooks/useFetchAndDispatch";
import { fetchFriends } from "../../../../../api/sidebarAPI";

const FriendsContainer = ({ t }) => {
  // Получаем sidebar из состояния Redux
  const sidebar = useSelector((state) => state.sidebar);

  // Получаем кол-во друзей которое хотим показать
  const friendsAmount = sidebar.friendsListSize;

  // Запрашиваем пользователей с API
  useFetchAndDispatch(fetchFriends(friendsAmount), [friendsAmount, ""]);

  // Получаем список друзей из sidebar, если данных нет, возвращаем пустой массив
  const friends = sidebar.friends || [];

  // Получаем информацию о поиске друзей из sidebar
  const findFriends = sidebar.findFriends;

  return (
    // Передаем данные о друзьях и поиск друзей в компонент Friends
    <Friends findFriends={findFriends} friends={friends} t={t} />
  );
};

export default FriendsContainer;
