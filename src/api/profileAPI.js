import fetchData from "./fetchData";
import { startLoading, stopLoading } from '../redux/SpinnerReducer/spinner-reducer';
import avatars from "../assets/Avatars-src";

const baseMessageUrl = '/messages/';

export const fetchPosts = () => (dispatch) => {
  // if (filteredFriends.length > 0) return;
    dispatch(startLoading())
    fetchData('https://social-network.samuraijs.com/api/1.0/users')
    .then((data) => {
      console.log(data);
      // if (data && data.results) {
      //   const usersArr = data.results.map((user) => {
      //     return {
      //       userId: user.login.uuid,
      //       name: `${user.name.first} ${user.name.last}`,
      //       isFollow: false,
      //       url: `${baseMessageUrl}${user.login.uuid}`,
      //       IsActive: true,
      //       city: user.location.city,
      //       avatar: user.picture?.large || avatars.defaultPic,
      //     };
      //   });
      //   dispatch(setUsersList(usersArr));
      // }
    })
    .catch((error) => {
      console.error('Failed to fetch users:', error);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
  };
