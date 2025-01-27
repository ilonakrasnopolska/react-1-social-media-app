import { SearchIcon } from "../../../../../redux/assets/SVG-icons";
import Title from "../../../common/Title";
import Classes from "../FindFriends/FindFriends.module.css";
import UserCardContainer from ".//UserCard/UserCardContainer";
import { fetchUsers } from "../../../../../api/usersAPI";
import { useFetchAndDispatch } from "../../../../hooks/useFetchAndDispatch";
import { ClipLoader } from "react-spinners";

const FindFriends = ({ t, filteredFriends, hasResults, searchNewFriendText, isLoading, useTextChangeHandlers, useResetSearchQuery }) => {
  useResetSearchQuery();
  useFetchAndDispatch(fetchUsers);
  return (
    <section className="friends section">
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <div className={Classes.search_wrapper}>
            <input
              placeholder={t('Find')}
              value={searchNewFriendText}
              id='user-search'
              type="text"
              onChange={useTextChangeHandlers}
            />
            <button><SearchIcon /></button>
          </div>
          <Title CommonClasses={Classes} text={t("FindFriends") + ":"} />
          <p className={Classes.text}>{t("Description")}</p>

          {isLoading ? (
            <div className={Classes.spinner}>
              <ClipLoader color={"#194770"} loading={true} size={50} />
            </div>
          ) : hasResults ? (
            <ul className={Classes.list}>
              {filteredFriends.map(friend => (
                <UserCardContainer key={friend.userId} friend={friend} t={t} />
              ))}
            </ul>
          ) : (
            <div className={Classes.empty_message}>{t('Empty')}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindFriends;
