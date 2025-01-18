import useData from "../../../../hooks/useData"
import {useInputHandlers} from "../../../../hooks/useInputHandlers";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery"
import {setSearchQuery} from "../../../../../redux/FindFriendsReducer/find-friends-reducer"
import {SearchIcon} from "../../../../../redux/assets/SVG-icons"
import Title from "../../../common/Title";
import Classes from "../FindFriends/FindFriends.module.css";
import UserCard from "./UserCard/UserCard";

const FindFriends = ({ t }) => {
  const findFriends = useData('findFriends');
  const friends = findFriends.filteredFriends || [];
  const searchNewFriendText = findFriends.searchNewFriendText;
  const {useTextChangeHandlers} = useInputHandlers(setSearchQuery);
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
          {friends.length > 0 ? (
            <ul className={Classes.list}>
              {friends.map((friend) => (
                <UserCard key={friend.userId} friend={friend} t={t} />
              ))}
            </ul>
          ) : (
            <p className={Classes.empty_message}>{t("Empty")}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindFriends;
