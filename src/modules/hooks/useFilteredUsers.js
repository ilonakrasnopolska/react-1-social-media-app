import useData from "./useData";

// Кастомный хук для получения отфильтрованного списка пользователей
const useFilteredUsers = (reducer) => {
  // Используем хук useData для получения данных о пользователях из Redux
  const findFriends = useData(reducer);

  // Извлекаем отфильтрованный список друзей
  const filteredList = findFriends.filteredFriends;

  // Извлекаем кол-во пользователей на странице
  const pageSize = findFriends.pageSize;

  // Извлекаем общее кол-во пользователей
  const totalUsersCount = findFriends.totalUsersCount;

  // Извлекаем текущую страницу
  const currentPage = findFriends.currentPage;

  // Проверяем, есть ли результаты в отфильтрованном списке
  const hasResults = filteredList.length > 0;

  // Возвращаем данные
  return {
    findFriends,
    filteredList,
    pageSize,
    totalUsersCount,
    currentPage,
    hasResults,
  };
};

export default useFilteredUsers;
