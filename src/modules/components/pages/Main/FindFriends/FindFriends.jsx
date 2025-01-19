import {SearchIcon} from "../../../../../redux/assets/SVG-icons"
import Title from "../../../common/Title";
import Classes from "../FindFriends/FindFriends.module.css";
import UserCardContainer from ".//UserCard/UserCardContainer";

const FindFriends = ({ t, filteredFriends, hasResults, searchNewFriendText, useTextChangeHandlers, useResetSearchQuery }) => {
  useResetSearchQuery();
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
          onChange={useTextChangeHandlers}/>
          <button><SearchIcon/></button>
          </div>
          <Title CommonClasses={Classes} text={t("MyFriends") + ":"} />
          <p className={Classes.text}>{t("Description")}</p>
           {hasResults ? (
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
