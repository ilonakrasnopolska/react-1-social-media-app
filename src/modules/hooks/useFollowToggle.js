import { useDispatch } from "react-redux";
import { follow, unFollow } from "../../redux/FindFriendsReducer/find-friends-reducer";

export const useFollowToggle = () => {
  const dispatch = useDispatch();

  const toggle = (friend) => {
    if (friend.isFollow) {
      dispatch(unFollow({ friend }));
    } else {
      dispatch(follow({ friend }));
    }
  };

  return toggle;
};
