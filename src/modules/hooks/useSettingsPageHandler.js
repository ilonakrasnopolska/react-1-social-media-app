import { useSelector } from "react-redux";

// Хук для обработки данных страницы настроек
export const useSettingsPageHandler = (title) => {
  console.log(title);
  const settingsOptions = useSelector((state) => state.settings.settings);
  const editProfileOption = useSelector(
    (state) => state.settings.personalAccount.editPage
  );

  // Если настройки ещё не загрузились — ничего не возвращаем
  const isLoading = !settingsOptions || settingsOptions.length === 0;

  const enhancedSettingsOptions =
    title &&
    editProfileOption &&
    String(title) === String(editProfileOption.title)
      ? [...settingsOptions, editProfileOption]
      : settingsOptions || [];

  const selectedOption = title
    ? enhancedSettingsOptions.find(
        (option) => String(option.title) === String(title)
      )
    : null;

  const isNotFound =
    !isLoading &&
    title &&
    (!selectedOption || Object.keys(selectedOption).length === 0);

  return {
    title,
    enhancedSettingsOptions,
    selectedOption,
    isNotFound,
  };
};
