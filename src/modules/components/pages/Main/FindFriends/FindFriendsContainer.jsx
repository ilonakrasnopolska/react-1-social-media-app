import { setSearchQuery } from "../../../../../redux/FindFriendsReducer/find-friends-reducer";
import {useInputHandlers} from "../../../../hooks/useInputHandlers";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery"
import FindFriends from './FindFriends';
import useFilteredUsers from "../../../../hooks/useFilteredUsers";
import useData from "../../../../hooks/useData";


const FindFriendsContainer = ({ t }) => {
  const isLoading = useData('loading');
  const {useTextChangeHandlers} = useInputHandlers(setSearchQuery);
  const {findFriends, filteredList, hasResults} = useFilteredUsers('findFriends')
  const searchNewFriendText = findFriends.searchNewFriendText;


  return <FindFriends t={t} filteredFriends={filteredList} hasResults={hasResults}
  searchNewFriendText={searchNewFriendText} isLoading={isLoading}
  useTextChangeHandlers={useTextChangeHandlers}
  useResetSearchQuery={() => useResetSearchQuery} />;
};

export default FindFriendsContainer;
