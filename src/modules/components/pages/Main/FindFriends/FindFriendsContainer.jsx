import { setSearchQuery } from "../../../../../redux/FindFriendsReducer/find-friends-reducer";
import { useInputHandlers } from "../../../../hooks/useInputHandlers";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery";
import FindFriends from "./FindFriends";
import useFilteredUsers from "../../../../hooks/useFilteredUsers";
import useData from "../../../../hooks/useData";

const FindFriendsContainer = ({ t }) => {
  // Получаем состояние загрузки
  const isLoading = useData("loading");

  // Хук для обработки изменения текста поиска
  const { useTextChangeHandlers } = useInputHandlers(setSearchQuery);

  // Получаем отфильтрованный список пользователей и информацию о наличии результатов
  const { findFriends, filteredList, hasResults } =
    useFilteredUsers("findFriends");

  // Текст для поиска нового друга
  const searchNewFriendText = findFriends.searchNewFriendText;

  return (
    // Компонент, который отображает список найденных друзей
    <FindFriends
      t={t}
      filteredFriends={filteredList}
      hasResults={hasResults}
      searchNewFriendText={searchNewFriendText}
      isLoading={isLoading}
      // Передаем хэндлеры и функцию сброса запроса для поиска
      useTextChangeHandlers={useTextChangeHandlers}
      useResetSearchQuery={() => useResetSearchQuery}
    />
  );
};

export default FindFriendsContainer;
