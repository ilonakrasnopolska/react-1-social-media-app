import { useSelector } from "react-redux";

// Кастомный хук для получения данных личного аккаунта
export const usePersonalAccountData = () => {
  // Получаем данные о личном аккаунте из состояния Redux
  const accountData = useSelector((state) => state.settings.personalAccount);

  // Извлекаем информацию о пользователе и состояние страницы редактирования
  const { userData, editPage } = accountData;

  // Возвращаем данные о пользователе и состоянии страницы редактирования
  return { userData, editPage };
};
