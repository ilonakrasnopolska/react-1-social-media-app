import useData from "./useData";

// Кастомный хук для получения отфильтрованного списка пользователей
const useFilteredUsers = (reducer) => {
  // Используем хук useData для получения данных о пользователях из Redux
  const findFriends = useData(reducer);

  // Извлекаем отфильтрованный список друзей
  const filteredList = findFriends.filteredFriends;

  // Проверяем, есть ли результаты в отфильтрованном списке
  const hasResults = filteredList.length > 0;

  // Возвращаем данные: оригинальные данные о пользователях, отфильтрованный список и флаг наличия результатов
  return { findFriends, filteredList, hasResults };
};

export default useFilteredUsers;
