import React from "react";
import Messages from "./Messages";
import Classes from "./Messages.module.css"
import useData from "../../../../hooks/useData";
import { useParams } from "react-router-dom";
import { useResetActiveUserOnRouteChange } from "../../../../hooks/useResetActiveUser";

const MessagesContainer = ({ t }) => {
  useResetActiveUserOnRouteChange(); // Сброс активного пользователя при изменении маршрута

  const { userId } = useParams(); // Получаем userId из URL
  const dialogs = useData("dialogs"); // Получаем список диалогов
  const isLoading = useData("loading"); // Проверяем, загружаются ли данные

  return (
    <div className={Classes.messages_wrapper}>
    <Messages
      dialogs={dialogs} // Передаём список диалогов в компонент Messages
      idFromUrl={userId} // Передаём id пользователя из URL
      isLoading={isLoading} // Передаём статус загрузки
      t={t} // Функция для перевода текста
    />
    </div>
  );
};

export default MessagesContainer;
