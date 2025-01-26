import { setSearchQuery } from "../../../../../redux/FindFriendsReducer/find-friends-reducer";
import {useInputHandlers} from "../../../../hooks/useInputHandlers";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery"
import FindFriends from './FindFriends';
import useFilteredUsers from "../../../../hooks/useFilteredUsers";


const FindFriendsContainer = ({ t }) => {
  const {useTextChangeHandlers} = useInputHandlers(setSearchQuery);
  const {findFriends, filteredList, hasResults} = useFilteredUsers('findFriends')
  const searchNewFriendText = findFriends.searchNewFriendText;


  return <FindFriends t={t} filteredFriends={filteredList} hasResults={hasResults}
  searchNewFriendText={searchNewFriendText} useTextChangeHandlers={useTextChangeHandlers}
  useResetSearchQuery={() => useResetSearchQuery} />;
};

export default FindFriendsContainer;
