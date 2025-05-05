import { setSearchQuery } from "../../../../../redux/FindFriendsReducer/find-friends-reducer";
import { useInputHandlers } from "../../../../hooks/useInputHandlers";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery";
import FindFriends from "./FindFriends";
import useFilteredUsers from "../../../../hooks/useFilteredUsers";
import useData from "../../../../hooks/useData";
import usePagination from "../../../../hooks/usePagination";
import usePageChange from "../../../../hooks/usePageChange";

const FindFriendsContainer = ({ t }) => {
  //Сбросить строку поиска при изменении компоненты
  useResetSearchQuery();

  // Получаем состояние загрузки
  const isLoading = useData("loading");

  // Хук для обработки изменения текста поиска
  const { useTextChangeHandlers } = useInputHandlers(setSearchQuery);

  // Получаем отфильтрованный список пользователей и информацию о наличии результатов
  const {
    findFriends,
    filteredList,
    currentList,
    usersPages,
    pageSize,
    totalUsersCount,
    currentPage,
    hasResults,
    loadedPages,
  } = useFilteredUsers("findFriends");
  // Текст для поиска нового друга
  const searchNewFriendText = findFriends.searchNewFriendText;
  // Используем хук для изменения страницы
  const changePage = usePageChange();
  // Используем хук пагинации
  const { pages } = usePagination(totalUsersCount, pageSize);

  return (
    // Компонент, который отображает список найденных друзей
    <FindFriends
      t={t}
      filteredFriends={filteredList}
      currentList={currentList}
      usersPages={usersPages}
      loadedPages={loadedPages}
      hasResults={hasResults}
      searchNewFriendText={searchNewFriendText}
      isLoading={isLoading}
      pageSize={pageSize}
      currentPage={currentPage}
      changePage={changePage}
      pages={pages}
      totalUsersCount={totalUsersCount}
      // Передаем хэндлеры и функцию сброса запроса для поиска
      useTextChangeHandlers={useTextChangeHandlers}
    />
  );
};

export default FindFriendsContainer;
