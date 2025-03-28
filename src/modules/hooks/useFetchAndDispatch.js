import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

// Кастомный хук для выполнения запроса при монтировании компонента
export const useFetchAndDispatch = (action, dependencies = []) => {
  const dispatch = useDispatch();
  const isFetched = useRef(false); // Флаг, чтобы запрос выполнялся только один раз

  useEffect(() => {
    // Проверяем, был ли уже выполнен запрос
    if (!isFetched.current) {
      dispatch(action()); // Запускаем экшен (например, загрузку данных)
      isFetched.current = true; // Помечаем, что запрос уже отправлен
    }
  }, [dispatch, ...dependencies]); // Хук срабатывает при изменении зависимостей
};
