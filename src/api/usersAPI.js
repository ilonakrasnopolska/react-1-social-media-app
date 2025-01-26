import fetchData from "./fetchData";
import { setUsersList } from "../redux/FindFriendsReducer/find-friends-reducer";

const baseMessageUrl = '/messages/';


export const fetchUsers = () => (dispatch) => {
  fetchData('https://randomuser.me/api/?results=10', {})
  .then((data) => {
    if (data && data.results) {
      console.log(data);
      // Извлекаем только нужные ключи
      const usersArr = data.results.map((user) => {
        return {
          userId: user.login.uuid, // Уникальный ID пользователя
          name: `${user.name.first} ${user.name.last}`, // Имя и фамилия
          isFollow: false, // Случайное следование
          url: `${baseMessageUrl}${user.login.uuid}`, // URL сообщений
          status: 'Active', // Фиксированный статус
          city: user.location.city, // Город
          avatar: user.picture.large, // Фото аватара
        };
      });
      dispatch(setUsersList(usersArr));
      console.log(usersArr);
    }
  })
  .catch((error) => {
    console.error('Failed to fetch users:', error);
  });
};
