import { useDispatch } from "react-redux";
import {
  deleteMessage,
  sendMessage,
  setActiveUser,
  startConversation,
} from "../../redux/DialogsReducer/dialogs-reducer";

export const useDialogsActions = () => {
  const dispatch = useDispatch();

  /**
   * Устанавливает активного пользователя для чата.
   * @param {string} userId - ID пользователя, которого нужно сделать активным.
   */
  const setActiveUserHandler = (userId) => {
    dispatch(setActiveUser(userId));
  };

  /**
   * Начинает новый чат с выбранным контактом.
   * @param {object} contact - Объект контакта с данными пользователя.
   * @param {string} id - ID текущего пользователя.
   */
  const handleStartChat = (contact, id) => {
    // Устанавливаем активного пользователя
    dispatch(setActiveUser(contact, id));
    // Начинаем новый разговор
    dispatch(startConversation(contact));
  };

  /**
   * Обрабатывает отправку сообщения в чат.
   * @param {object} event - Событие, вызываемое при отправке сообщения.
   * @param {string} userId - ID пользователя, которому отправляется сообщение.
   */
  const handleSendMessage = (event, userId) => {
    event.preventDefault();
    // Отправляем сообщение
    dispatch(sendMessage({ userId }));
  };

  /**
   * Удаляет сообщение из чата после подтверждения пользователя.
   * @param {string} userId - ID пользователя, чье сообщение нужно удалить.
   * @param {string} messageId - ID сообщения, которое нужно удалить.
   */
  const handleDeleteMessage = (userId, messageId) => {
    // Запрашиваем подтверждение удаления
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the message?`
    );
    if (confirmDelete) {
      // Удаляем сообщение
      dispatch(deleteMessage({ userId, messageId }));
    }
  };

  return {
    setActiveUserHandler,
    handleStartChat,
    handleSendMessage,
    handleDeleteMessage,
  };
};
