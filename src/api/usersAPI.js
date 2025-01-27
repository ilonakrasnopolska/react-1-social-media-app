import fetchData from "./fetchData";
import { setUsersList } from "../redux/FindFriendsReducer/find-friends-reducer";
import { startLoading, stopLoading } from '../redux/SpinnerReducer/spinner-reducer';

const baseMessageUrl = '/messages/';


export const fetchUsers = () => (dispatch) => {
  dispatch(startLoading())
  fetchData('https://randomuser.me/api/?results=10', {})
  .then((data) => {
    if (data && data.results) {
      // Извлекаем только нужные ключи
      const usersArr = data.results.map((user) => {
        return {
          userId: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          isFollow: false,
          url: `${baseMessageUrl}${user.login.uuid}`,
          IsActive: true,
          city: user.location.city,
          avatar: user.picture.large,
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
