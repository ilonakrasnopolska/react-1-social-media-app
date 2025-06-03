import fetchData from "./fetchData"; // Импорт функции для загрузки данных
import {
  setFriendsList,
} from "../redux/SidebarReducer/sidebar-reducer"; // Импорт экшена для установки списка пользователей
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer"; // Импорт экшенов для управления состоянием загрузки
import avatars from "../assets/Avatars-src"; // Импорт изображений аватаров
import { baseMessageUrl } from "../constants/constants"; // Импорт базового URL для сообщений

// Заглушки для данных
const cities = [`Haifa`, `Kyiv`, `Moscow`, `Minsk`, `New York`];

// Функция для загрузки пользователей
export const fetchFriends = (friendsAmount) => (dispatch) => {
  // Если уже есть отфильтрованные пользователи, не выполняем запрос
  dispatch(startLoading()); // Запуск индикатора загрузки

  // Выполняем запрос на сервер для получения списка пользователей
  fetchData(
    `https://social-network.samuraijs.com/api/1.0/users?count=${friendsAmount}`,
    {}
  )
    .then((data) => {
      // Если данные получены, создаем массив пользователей
      if (data && data.items) {
        const usersArr = data.items.map((user) => {
          const randomCity = cities[Math.floor(Math.random() * cities.length)];
          // Для каждого пользователя создаем объект с нужными данными
          return {
            userId: user.id, // Уникальный ID пользователя
            name: `${user.name}`, // Полное имя пользователя
            isFollow: false, // Статус подписки (по умолчанию не подписан)
            url: `${baseMessageUrl}${user.id}`, // Ссылка на сообщение с этим пользователем
            IsActive: true, // Статус активности пользователя
            city: randomCity, // Город пользователя
            avatar: user.photos.small || avatars.defaultPic, // Аватар пользователя (если есть, иначе дефолтный)
          };
        });

        // Диспатчим список пользователей в редьюсер
        dispatch(setFriendsList(usersArr));
      }
    })
    .catch((error) => {
      // Логируем ошибку в случае неудачи
      console.error("Failed to fetch users:", error);
    })
    .finally(() => {
      // Завершаем индикатор загрузки
      dispatch(stopLoading());
    });
};
