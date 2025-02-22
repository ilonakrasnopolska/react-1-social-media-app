import { useSelector } from "react-redux";
import Friends from "./Friends";

const FriendsContainer = ({ t }) => {
  const friends = useSelector((state) => state.sidebar.friends) || [];
  const findFriends = useSelector((state) => state.sidebar.findFriends);
  return (
   <Friends findFriends={findFriends} friends={friends} t={t}/>
  );
};

export default FriendsContainer;
