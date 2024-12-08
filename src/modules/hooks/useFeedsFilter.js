import {useDispatch} from "react-redux";
import {filterFeeds, setActiveCategory} from "../../redux/FeedsReducer/feeds-reducer";

export const useFeedsFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryFilter = (title) => {
    dispatch(setActiveCategory(title));
    dispatch(filterFeeds(title));
  }

  return {handleCategoryFilter};
};
