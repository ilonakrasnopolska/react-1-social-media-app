import fetchData from "./fetchData"; // Импорт функции для загрузки данных
import {
  setUsersList,
  setTotalUsersCount,
  setLoadedPage,
} from "../redux/FindFriendsReducer/find-friends-reducer"; // Импорт экшена для установки списка пользователей
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer"; // Импорт экшенов для управления состоянием загрузки
import avatars from "../assets/Avatars-src"; // Импорт изображений аватаров
import { baseMessageUrl } from "../constants/constants"; // Импорт базового URL для сообщений

// Заглушки для данных
const cities = [`Haifa`, `Kyiv`, `Moscow`, `Minsk`, `New York`];

// Функция для загрузки пользователей
export const fetchUsers =
  (pageSize, currentPage, loadedPages, usersPages) => (dispatch) => {
    // Проверяем, если страница уже загружена
    if (loadedPages.includes(currentPage)) {
      //Находим эту страницу
      const savedPage = usersPages.find((item) => item.page === currentPage);
      //Если нашли добавляем массив в текущую страницу
      if (savedPage) {
        dispatch(setUsersList(savedPage.usersList));
        dispatch(setTotalUsersCount(20));
      }
      return;
    }
    // Если уже есть отфильтрованные пользователи, не выполняем запрос
    dispatch(startLoading()); // Запуск индикатора загрузки

    // Выполняем запрос на сервер для получения списка пользователей
    fetchData(
      `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`,
      {}
    )
      .then((data) => {
        // Если данные получены, создаем массив пользователей
        if (data && data.items) {
          const usersArr = data.items.map((user) => {
            const randomCity =
              cities[Math.floor(Math.random() * cities.length)];
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
          dispatch(setUsersList(usersArr));
          dispatch(setTotalUsersCount(20));
          // Добавляем текущую страницу в список загруженных
          dispatch(setLoadedPage(currentPage));
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
