import { useSelector } from "react-redux";
import Title from "../../../common/Title";
import Classes from "../FriendsPage/FriendsPage.module.css";
import FriendCard from "./FriendCard/FriendCard";

const FriendsPage = ({ t }) => {
  const friends = useSelector((state) => state.friends.friends) || [];
  return (
    <section className="friends section">
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
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
