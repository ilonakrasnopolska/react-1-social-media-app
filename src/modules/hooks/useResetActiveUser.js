import { useEffect } from "react"; // Импортируем useEffect для выполнения побочных эффектов
import { useDispatch } from "react-redux"; // Импортируем useDispatch для работы с Redux
import { resetActiveUser } from "../../redux/DialogsReducer/dialogs-reducer"; // Импортируем экшен для сброса активного пользователя

// Хук для сброса активного пользователя при изменении маршрута
export const useResetActiveUserOnRouteChange = () => {
  const dispatch = useDispatch(); // Инициализируем dispatch для отправки экшенов в Redux

  useEffect(() => {
    // useEffect с пустым массивом зависимостей выполнится при размонтировании компонента
    return () => {
      // Когда компонент размонтируется (или будет смена маршрута), сбрасываем активного пользователя
      dispatch(resetActiveUser()); // Отправляем экшен для сброса активного пользователя
    };
  }, [dispatch]); // Зависимость от dispatch, так как мы используем его в эффекте
};
