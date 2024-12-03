import {useDispatch} from "react-redux";
import {setSearchQuery} from "../../redux/AnimeReducer/anime-reducer";

export const useAnimeSearchHandler = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const text = e.target.value;
    dispatch(setSearchQuery(text));
  };

  return {handleSearchChange};
};
