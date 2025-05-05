import useData from "./useData";

// Кастомный хук для получения отфильтрованного списка пользователей
const useFilteredUsers = (reducer) => {
  // Используем хук useData для получения данных о пользователях из Redux
  const findFriends = useData(reducer);

  // Извлекаем отфильтрованный список друзей
  const filteredList = findFriends.filteredUsers;
  // массив для UI показывает нужный список в нужный момент
  const currentList = findFriends.currentList;
  // Объект для хранения пользователей по страницам
  const usersPages = findFriends.usersPages;
  // Массив номеров загруженных страниц
  const loadedPages = findFriends.loadedPages;

  // Извлекаем кол-во пользователей на странице
  const pageSize = findFriends.pageSize;
  // Извлекаем общее кол-во пользователей
  const totalUsersCount = findFriends.totalUsersCount;
  // Извлекаем текущую страницу
  const currentPage = findFriends.currentPage;

  // Проверяем, есть ли результаты в отфильтрованном списке
  const hasResults = currentList.length > 0;

  // Возвращаем данные
  return {
    findFriends,
    filteredList,
    currentList,
    usersPages,
    pageSize,
    totalUsersCount,
    currentPage,
    hasResults,
    loadedPages,
  };
};

export default useFilteredUsers;
