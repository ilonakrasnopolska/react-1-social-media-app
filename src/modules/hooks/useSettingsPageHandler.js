import { useSelector } from "react-redux";

// Хук для обработки данных страницы настроек
export const useSettingsPageHandler = (title) => {
  // Получаем список опций настроек из Redux
  const settingsOptions = useSelector((state) => state.settings.settings);

  // Получаем данные страницы "Редактировать профиль"
  const editProfileOption = useSelector(
    (state) => state.settings.personalAccount.editPage
  );

  // Проверка, загружены ли вообще настройки
  const isLoading = !settingsOptions || settingsOptions.length === 0;

  /**
   * Если текущий заголовок страницы совпадает с заголовком страницы редактирования профиля —
   * добавляем её в список настроек. Это нужно, если эта страница не отображается в общем списке,
   * но должна быть доступна напрямую по ссылке.
   */
  const enhancedSettingsOptions =
    title &&
    editProfileOption &&
    String(title) === String(editProfileOption.title)
      ? [...settingsOptions, editProfileOption] // добавляем editProfilePage
      : settingsOptions || []; // или просто возвращаем обычные настройки

  // Ищем выбранную настройку по заголовку
  const selectedOption = title
    ? enhancedSettingsOptions.find(
        (option) => String(option.title) === String(title)
      )
    : null;

  // Определяем, является ли страница "не найдено"
  const isNotFound =
    !isLoading &&
    title &&
    (!selectedOption || Object.keys(selectedOption).length === 0);

  // Возвращаем нужные значения для использования в компоненте
  return {
    title, // Заголовок из URL или пропсов
    enhancedSettingsOptions, // Список всех доступных опций (возможно, с editPage)
    selectedOption, // Найденная опция (если есть)
    isNotFound, // Флаг, указывающий, что настройка не найдена
  };
};
