import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSearchQuery } from "../../redux/AnimeReducer/anime-reducer";

const useResetSearchQuery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearchQuery());
  }, [dispatch]);
};

export default useResetSearchQuery;
