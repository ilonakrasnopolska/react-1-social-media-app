import Classes from "./ChatBubble.module.css"; // Импорт CSS классов для стилизации
import React from "react";
import { useDialogsActions } from "../../../../../../../../hooks/useDialogsActions"; // Импорт хука для работы с действиями диалогов

// Компонент для отображения одного сообщения в чате
const ChatBubble = ({ userId, message, t }) => {
  // Деструктурируем функцию для удаления сообщения из хука
  const { handleDeleteMessage } = useDialogsActions();

  return (
    // Элемент списка для каждого сообщения
    <li className={Classes.chatItem}>
      <div className={Classes.messageWrapper}>
        {/* Обертка для контента сообщения */}
        <div className={Classes.messageContent}>
          {/* Аватар пользователя */}
          <img className={Classes.avatar} src={message.avatar} alt="avatar" />
          {/* Информация о сообщении */}
          <div className={Classes.messageInfo}>
            <span>{message.name}</span>{" "}
            {/* Имя пользователя, который отправил сообщение */}
            <div className={Classes.textContent}>
              <span>{message.message}</span> {/* Текст сообщения */}
              <span className={Classes.data}>{message.time}</span>{" "}
              {/* Время отправки сообщения */}
            </div>
          </div>
        </div>
        {/* Кнопка для удаления сообщения */}
        <div className={Classes.delete_btn}>
          <button
            onClick={() => {
              handleDeleteMessage(userId, message.id);
            }}
          >
            {t("Delete")}{" "}
            {/* Кнопка с текстом "Удалить", переведенная через функцию t */}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ChatBubble;
