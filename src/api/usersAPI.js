import fetchData from "./fetchData";
import { setUsersList } from "../redux/FindFriendsReducer/find-friends-reducer";
import { startLoading, stopLoading } from '../redux/SpinnerReducer/spinner-reducer';
import avatars from "../assets/Avatars-src";
import {baseMessageUrl} from "../constants/constants"


export const fetchUsers = (filteredFriends) => (dispatch) => {
  if (filteredFriends.length > 0) return;
    dispatch(startLoading())
    fetchData('https://randomuser.me/api/?results=10', {})
    .then((data) => {
      if (data && data.results) {
        const usersArr = data.results.map((user) => {
          return {
            userId: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            isFollow: false,
            url: `${baseMessageUrl}${user.login.uuid}`,
            IsActive: true,
            city: user.location.city,
            avatar: user.picture?.large || avatars.defaultPic,
          };
        });
        dispatch(setUsersList(usersArr));
      }
    })
    .catch((error) => {
      console.error('Failed to fetch users:', error);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
  };
