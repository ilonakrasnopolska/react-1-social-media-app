import { useSelector } from "react-redux";

export const useSettingsPageHandler = (id) => {
  const settingsOptions = useSelector((state) => state.settings.settings);
  const editProfileOption = useSelector((state) => state.settings.personalAccount.editPage);

  // Убедитесь, что id из URL передается в нужном формате (строка)
  const enhancedSettingsOptions = id && String(id) === String(editProfileOption.id)
    ? [...settingsOptions, editProfileOption]
    : settingsOptions;

  // Ищем выбранный option по id
  const selectedOption = id
    ? enhancedSettingsOptions.find((option) => String(option.id) === String(id)) // Преобразуем id в строку для сравнения
    : null;

  const isNotFound = id && (!selectedOption || Object.keys(selectedOption).length === 0);

  return {
    id,
    enhancedSettingsOptions,
    selectedOption,
    isNotFound, // если выбранный option не найден
  };
};
