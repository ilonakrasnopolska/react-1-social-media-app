import { useDispatch } from "react-redux";
import useData from "./useData";

const useShowAnimeWatchList = () => {
  const dispatch = useDispatch();
  const anime = useData('anime');

  const showUserList = (action, listName) => {
    dispatch(action({text: listName}))
  }

  return {showUserList};
};

export default useShowAnimeWatchList;
