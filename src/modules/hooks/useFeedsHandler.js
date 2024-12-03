import {useDispatch} from "react-redux";
import {filterFeeds, setActiveCategory} from "../../redux/FeedsReducer/feeds-reducer";

export const useFeedsHandler = () => {
  const dispatch = useDispatch();

  const onFilter = (title) => {
    dispatch(setActiveCategory(title));
    dispatch(filterFeeds(title));
  }

  return {onFilter};
};
