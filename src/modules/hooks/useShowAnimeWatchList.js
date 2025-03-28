import { useDispatch } from "react-redux"; // Импортируем хук useDispatch для отправки действий в Redux

// Хук для отображения списка аниме, который пользователь смотрит
const useShowAnimeWatchList = () => {
  const dispatch = useDispatch(); // Создаём dispatch для отправки действий в Redux store

  // Функция для отображения списка по имени
  const showUserList = (action, listName) => {
    // Отправляем action в Redux с текстом, который соответствует названию списка
    dispatch(action({ text: listName }));
  };

  // Возвращаем функцию showUserList для использования в других компонентах
  return { showUserList };
};

export default useShowAnimeWatchList;
