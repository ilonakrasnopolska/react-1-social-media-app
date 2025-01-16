import { useSelector } from "react-redux";
import {SearchIcon} from "../../../../../redux/assets/SVG-icons"
import Title from "../../../common/Title";
import Classes from "../FriendsPage/FriendsPage.module.css";
import FriendCard from "./FriendCard/FriendCard";

const FriendsPage = ({ t }) => {
  const friends = useSelector((state) => state.friends.friends) || [];
  return (
    <section className="friends section">
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <div className={Classes.search_wrapper}>
          <input
          placeholder={t('Find')}
          id='user-search'
          type="text" />
          <button><SearchIcon/></button>
          </div>
          <Title CommonClasses={Classes} text={t("MyFriends") + ":"} />
          <p className={Classes.text}>{t("Description")}</p>
          <ul className={Classes.list}>
            {friends.map((friend) => (
              <FriendCard
                key={friend.userId}
                friend={friend}
                t={t}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FriendsPage;
