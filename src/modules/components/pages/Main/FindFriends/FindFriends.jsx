import { SearchIcon } from "../../../../../assets/SVG-icons";
import Title from "../../../common/Title";
import Classes from "../FindFriends/FindFriends.module.css";
import UserCardContainer from ".//UserCard/UserCardContainer";
import { fetchUsers } from "../../../../../api/usersAPI";
import { useFetchAndDispatch } from "../../../../hooks/useFetchAndDispatch";
import { Pagination } from "../../../common/Pagination/Pagination";
import { setCurrentPage } from "../../../../../redux/FindFriendsReducer/find-friends-reducer";
import Preloader from "../../../common/Preloader/Preloader";

const FindFriends = ({
  t,
  currentList,
  usersPages,
  loadedPages,
  hasResults,
  searchNewFriendText,
  isLoading,
  pageSize,
  currentPage,
  useTextChangeHandlers,
  changePage,
  pages,
}) => {
  // Запрашиваем пользователей с API
  useFetchAndDispatch(
    fetchUsers(pageSize, currentPage, loadedPages, usersPages),
    [pageSize, currentPage]
  );
  return (
    <section className="friends section">
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <div className={Classes.search_wrapper}>
            <input
              placeholder={t("Find")}
              value={searchNewFriendText}
              id="user-search"
              type="text"
              onChange={useTextChangeHandlers}
            />
            <button>
              <SearchIcon />
            </button>
          </div>
          <Title CommonClasses={Classes} text={t("FindFriends") + ":"} />
          <p className={Classes.text}>{t("Description")}</p>

          {isLoading ? (
            <Preloader />
          ) : hasResults ? (
            <ul className={Classes.list}>
              {currentList.map((friend) => (
                <UserCardContainer key={friend.userId} friend={friend} t={t} />
              ))}
            </ul>
          ) : (
            <div className={Classes.empty_message}>{t("Empty")}</div>
          )}
          {/* Блок пагинации */}
          {searchNewFriendText.trim() === "" && (
            <Pagination
              pages={pages}
              Classes={Classes}
              currentPage={currentPage}
              changePage={changePage}
              setCurrentPageAction={setCurrentPage}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FindFriends;
