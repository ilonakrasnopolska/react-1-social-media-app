import { useDispatch } from "react-redux";

const usePageChange = () => {
  const dispatch = useDispatch();

  // Хук для выполнения асинхронного запроса при изменении страницы
  const changePage = (action, page) => {
    dispatch(action(page)); // Изменяем текущую страницу в Redux
  };

  return changePage;
};

export default usePageChange;
