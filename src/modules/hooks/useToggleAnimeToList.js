import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useToggleAnimeToList = (anime) => {
  const dispatch = useDispatch();

  const watchList = useSelector((state) => state.anime.watchList);
  const watchedList = useSelector((state) => state.anime.watchedList);

  const [isInWatchList, setIsInWatchList] = useState(false);
  const [isInWatchedList, setIsInWatchedList] = useState(false);
  const [activeLike, setActiveLike] = useState(null);

  useEffect(() => {
    setIsInWatchList(watchList.some((item) => item.id === anime.id));
    setIsInWatchedList(watchedList.some((item) => item.id === anime.id));
  }, [watchList, watchedList, anime.id]);

  useEffect(() => {
    if (anime.rating !== undefined) {
      setActiveLike(anime.rating);
    }
  }, [anime]);

  const toggleAnimeList = (action, rating) => {
    if (rating != undefined) {
      dispatch(action({ animeObj: anime, rating: rating }));
      setActiveLike(rating === activeLike ? null : rating);
    } else {
      dispatch(action({ animeObj: anime }));
    }
  };

  return { toggleAnimeList, isInWatchList, isInWatchedList, activeLike };
};

export default useToggleAnimeToList;
