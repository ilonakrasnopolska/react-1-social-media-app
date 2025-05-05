import Classes from "./UsersList.module.css";
import React from "react";
import { ClipLoader } from "react-spinners";
import DialogUser from "./DialogUser/DialogUser";
import CreateNewChat from "./CreateNewChat/CreateNewChat";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { fetchUsers } from "../../../../../../api/dialogsAPI";

// Компонент для отображения списка пользователей
const UsersList = ({
  users,
  isLoading,
  searchUserText,
  idFromUrl,
  filteredContacts,
  t,
}) => {
  // Хук для загрузки данных пользователей
  useFetchAndDispatch(fetchUsers(users));

  return (
    <section className="users section">
      <div className={Classes.content}>
        {/* Если данные загружаются, показываем спиннер */}
        {isLoading ? (
          <div className={Classes.spinner}>
            <ClipLoader color="#194770" size={50} />{" "}
            {/* Спиннер для загрузки */}
          </div>
        ) : (
          <ul className={Classes.list}>
            {/* Отображаем каждого пользователя из списка */}
            {users.map((el) => (
              <DialogUser
                userId={el.userId} // ID пользователя
                key={el.userId} // Ключ для каждого элемента
                users={users} // Список всех пользователей
                t={t} // Функция для перевода текста
                idFromUrl={idFromUrl} // ID пользователя из URL
              />
            ))}
          </ul>
        )}

        {/* Компонент для создания нового чата */}
        <div>
          <CreateNewChat
            searchUserText={searchUserText} // Текст для поиска пользователя
            filteredContacts={filteredContacts} // Отфильтрованные контакты
            t={t} // Функция для перевода текста
          />
        </div>
      </div>
    </section>
  );
};

export default UsersList;
