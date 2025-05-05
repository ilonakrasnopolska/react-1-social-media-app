import { useSelector } from "react-redux";

// Хук для обработки данных страницы настроек
export const useSettingsPageHandler = (id) => {
  const settingsOptions = useSelector((state) => state.settings.settings);
  const editProfileOption = useSelector(
    (state) => state.settings.personalAccount.editPage
  );

  // Если настройки ещё не загрузились — ничего не возвращаем
  const isLoading = !settingsOptions || settingsOptions.length === 0;

  const enhancedSettingsOptions =
    id && editProfileOption && String(id) === String(editProfileOption.id)
      ? [...settingsOptions, editProfileOption]
      : settingsOptions || [];

  const selectedOption = id
    ? enhancedSettingsOptions.find((option) => String(option.id) === String(id))
    : null;

  const isNotFound =
    !isLoading &&
    id &&
    (!selectedOption || Object.keys(selectedOption).length === 0);

  return {
    id,
    enhancedSettingsOptions,
    selectedOption,
    isNotFound,
  };
};
