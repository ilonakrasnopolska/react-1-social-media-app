import { useSelector } from "react-redux"; // Импортируем useSelector для доступа к состоянию из Redux store

// Хук для обработки данных страницы настроек
export const useSettingsPageHandler = (id) => {
  // Извлекаем данные настроек из Redux store
  const settingsOptions = useSelector((state) => state.settings.settings);
  const editProfileOption = useSelector(
    (state) => state.settings.personalAccount.editPage
  );

  // Убедитесь, что id из URL передается в нужном формате (строка)
  // Проверяем, если переданное id совпадает с id редактируемой страницы профиля, добавляем её в список опций
  const enhancedSettingsOptions =
    id && String(id) === String(editProfileOption.id)
      ? [...settingsOptions, editProfileOption] // Если id совпадает, добавляем editProfileOption в список опций
      : settingsOptions; // Иначе просто используем базовые опции настроек

  // Ищем выбранный option по id (если id передано)
  const selectedOption = id
    ? enhancedSettingsOptions.find((option) => String(option.id) === String(id)) // Преобразуем id в строку для сравнения
    : null; // Если id нет, то selectedOption будет null

  // Проверяем, если selectedOption не найден или пустой объект
  const isNotFound =
    id && (!selectedOption || Object.keys(selectedOption).length === 0);

  // Возвращаем данные для использования в компоненте
  return {
    id, // id, переданный в хук
    enhancedSettingsOptions, // Обновлённый список опций настроек
    selectedOption, // Выбранная опция настроек
    isNotFound, // Флаг, если выбранная опция не найдена
  };
};
