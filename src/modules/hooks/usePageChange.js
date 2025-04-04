import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/FindFriendsReducer/find-friends-reducer";

const usePageChange = () => {
  const dispatch = useDispatch();

  // Хук для выполнения асинхронного запроса при изменении страницы
  const changePage = (page) => {
    dispatch(setCurrentPage(page)); // Изменяем текущую страницу в Redux
  };

  return changePage;
};

export default usePageChange;
