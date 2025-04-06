import { SearchIcon } from "../../../../../assets/SVG-icons";
import Title from "../../../common/Title";
import Classes from "../FindFriends/FindFriends.module.css";
import UserCardContainer from ".//UserCard/UserCardContainer";
import { fetchUsers } from "../../../../../api/usersAPI";
import { useFetchAndDispatch } from "../../../../hooks/useFetchAndDispatch";
import { ClipLoader } from "react-spinners";
import { Pagination } from "../../../common/Pagination/Pagination";
import { setCurrentPage } from "../../../../../redux/FindFriendsReducer/find-friends-reducer";

const FindFriends = ({
  t,
  filteredFriends,
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
  useFetchAndDispatch(fetchUsers(pageSize, currentPage), [
    pageSize,
    currentPage,
  ]);

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
            <div className={Classes.spinner}>
              <ClipLoader color={"#194770"} loading={true} size={50} />
            </div>
          ) : hasResults ? (
            <ul className={Classes.list}>
              {filteredFriends.map((friend) => (
                <UserCardContainer key={friend.userId} friend={friend} t={t} />
              ))}
            </ul>
          ) : (
            <div className={Classes.empty_message}>{t("Empty")}</div>
          )}

          {/* Блок пагинации */}
          <Pagination
            pages={pages}
            Classes={Classes}
            currentPage={currentPage}
            changePage={changePage}
            setCurrentPageAction={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default FindFriends;
