import useData from "./useData";

const useFilteredUsers = (reducer) => {
  const findFriends = useData(reducer);
  const filteredList = findFriends.filteredFriends;

  const hasResults = filteredList.length > 0;

  return {findFriends, filteredList, hasResults };
};

export default useFilteredUsers;
