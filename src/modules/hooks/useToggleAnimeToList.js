import { useDispatch } from "react-redux";

const useToggleAnimeToList = (animeKeys) => {
  const dispatch = useDispatch();

  const toggleAnimeList = (action) => {
    dispatch(action({ animeObj: animeKeys }));
  };

  return {toggleAnimeList};
};

export default useToggleAnimeToList;
