import { useDispatch } from "react-redux";
import {
  updateRequestUserNameText, // Экшен для обновления текста имени пользователя в запросе
  updateRequestMessageText, // Экшен для обновления текста сообщения в запросе
  sendSupportMessage, // Экшен для отправки сообщения в службу поддержки
  validateRequestForHelpForm, // Экшен для проверки формы на валидность
} from "../../redux/SettingsReducer/settings-reducer";

// Хук для обработки формы запроса в центр поддержки
export const useRequestHelpForm = (helpCenter) => {
  const dispatch = useDispatch(); // Получаем dispatch для отправки экшенов в Redux
  const { requestUserNameText, requestMessageText, errors, isMessageSend } = helpCenter; // Деструктуризация состояния из helpCenter

  // Обработчик сабмита формы
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(validateRequestForHelpForm()); // Валидация формы
    if (isMessageSend) {
      dispatch(sendSupportMessage()); // Отправляем сообщение, если форма валидна
    }
    return isMessageSend; // Возвращаем результат валидации для родительского компонента
  };

  // Обработчик изменения текста в полях формы
  const handleInputChange = (field) => (event) => {
    const text = event.target.value; // Получаем введённый текст
    // Определяем, какое поле обновлять, в зависимости от имени поля
    const action =
      field === "userName"
        ? updateRequestUserNameText(text) // Обновляем текст имени пользователя
        : updateRequestMessageText(text); // Обновляем текст сообщения
    dispatch(action); // Отправляем экшен для обновления текста в Redux
  };

  // Возвращаем данные и обработчики для использования в компоненте
  return {
    requestUserNameText, // Текст имени пользователя в запросе
    requestMessageText, // Текст сообщения в запросе
    errors, // Ошибки формы, если они есть
    handleInputChange, // Обработчик изменений в полях формы
    handleFormSubmit, // Обработчик отправки формы
  };
};
