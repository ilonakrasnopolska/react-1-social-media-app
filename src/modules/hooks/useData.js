import { useSelector } from "react-redux";

/**
 * Хук для получения данных из Redux состояния по ключу.
 * @param {string} key - Ключ, который соответствует части состояния в Redux store.
 * @returns {any} - Данные, хранящиеся по указанному ключу в состоянии.
 */
const useData = (key) => {
  // Проверка на существование ключа в состоянии
  return useSelector((state) => state[key]);
};

export default useData;
