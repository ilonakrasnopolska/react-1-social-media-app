import { useEffect } from "react"; // Импортируем useEffect для работы с побочными эффектами
import { useDispatch } from "react-redux"; // Импортируем useDispatch для отправки экшенов в Redux
import { clearSearchQuery } from "../../redux/AnimeReducer/anime-reducer"; // Импортируем экшен для сброса поискового запроса

// Хук для сброса поискового запроса при изменении компонента
const useResetSearchQuery = () => {
  const dispatch = useDispatch(); // Инициализируем dispatch для отправки экшенов в Redux

  useEffect(() => {
    // useEffect будет вызван при монтировании компонента
    dispatch(clearSearchQuery()); // Отправляем экшен для очистки поискового запроса
  }, [dispatch]); // Зависимость от dispatch (он не меняется, поэтому эффекта будет достаточно только при монтировании)
};

export default useResetSearchQuery; // Экспортируем хук для использования в других компонентах
