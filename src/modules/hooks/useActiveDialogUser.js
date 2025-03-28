import { useDialogsActions } from "./useDialogsActions";

// Кастомный хук для работы с активным пользователем диалога
export const useActiveDialogUser = (userId, users, idFromUrl) => {
  // Получаем функцию для установки активного пользователя
  const { setActiveUserHandler } = useDialogsActions();

  // Ищем пользователя в массиве users по userId
  // Если пользователь не найден, присваиваем значения по умолчанию для всех переменных
  const { userId: id, avatar, name } = users.find(user => user.userId === userId) || { userId: null, avatar: null, name: null };

  // Проверяем, активен ли пользователь (сравниваем с id из URL)
  // Приводим id и idFromUrl к строковому типу, чтобы избежать проблем с типами данных
  const isActive = String(idFromUrl) === String(id);

  // Функция для обработки клика по пользователю (устанавливает активного пользователя)
  const handleClick = () => setActiveUserHandler(userId);

  // Возвращаем информацию о пользователе и функции
  return { id, avatar, name, isActive, handleClick };
};
