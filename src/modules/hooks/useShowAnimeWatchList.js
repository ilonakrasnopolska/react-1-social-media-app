import { useDispatch } from "react-redux";

const useShowAnimeWatchList = () => {
  const dispatch = useDispatch();

  const showUserList = (action, listName) => {
    dispatch(action({text: listName}))
  }

  return {showUserList};
};

export default useShowAnimeWatchList;
