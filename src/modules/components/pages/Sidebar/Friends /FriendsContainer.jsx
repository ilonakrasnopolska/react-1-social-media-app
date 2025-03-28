import { useSelector } from "react-redux"; // Импортируем хук useSelector из Redux для получения состояния из хранилища
import Friends from "./Friends"; // Импортируем компонент Friends

const FriendsContainer = ({ t }) => {
  // Получаем список друзей из состояния Redux, если данных нет, возвращаем пустой массив
  const friends = useSelector((state) => state.sidebar.friends) || [];

  // Получаем информацию о поиске друзей из состояния Redux
  const findFriends = useSelector((state) => state.sidebar.findFriends);

  return (
    // Передаем данные о друзьях и поиск друзей в компонент Friends
    <Friends findFriends={findFriends} friends={friends} t={t} />
  );
};

export default FriendsContainer;
