import fetchData from "./fetchData"; // Импорт функции для загрузки данных
import {
  setUsersList,
  setTotalUsersCount,
  setLoadedPage
} from "../redux/FindFriendsReducer/find-friends-reducer"; // Импорт экшена для установки списка пользователей
import {
  startLoading,
  stopLoading,
} from "../redux/SpinnerReducer/spinner-reducer"; // Импорт экшенов для управления состоянием загрузки
import avatars from "../assets/Avatars-src"; // Импорт изображений аватаров
import { baseMessageUrl } from "../constants/constants"; // Импорт базового URL для сообщений

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
      `https://randomuser.me/api/?results=${pageSize}&page=${currentPage}&seed=customseed`,
      {}
    )
      .then((data) => {
        // Если данные получены, создаем массив пользователей
        if (data && data.results) {
          const usersArr = data.results.map((user) => {
            // Для каждого пользователя создаем объект с нужными данными
            return {
              userId: user.login.uuid, // Уникальный ID пользователя
              name: `${user.name.first} ${user.name.last}`, // Полное имя пользователя
              isFollow: false, // Статус подписки (по умолчанию не подписан)
              url: `${baseMessageUrl}${user.login.uuid}`, // Ссылка на сообщение с этим пользователем
              IsActive: true, // Статус активности пользователя
              city: user.location.city, // Город пользователя
              avatar: user.picture?.large || avatars.defaultPic, // Аватар пользователя (если есть, иначе дефолтный)
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
