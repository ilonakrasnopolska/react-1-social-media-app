import { useDispatch, useSelector } from "react-redux";
import { updateSelectedLanguage } from "../../redux/SettingsReducer/settings-reducer";

// Кастомный хук для работы с настройками языка
export const useLanguageSettings = () => {
  // Получаем dispatch для отправки действий в Redux
  const dispatch = useDispatch();

  // Извлекаем языковые настройки и выбранный язык из Redux
  const { languages, selectedLanguage } = useSelector(
    (state) => state.settings.languageSettings
  );

  // Формируем список опций для выбора языка
  const options = Object.values(languages).map((lang) => ({
    value: lang.code, // Код языка (например, "en", "fr")
    label: lang.name, // Имя языка (например, "English", "Français")
  }));

  // Находим выбранную опцию на основе текущего языка
  const selectedOption = options.find(
    (option) => option.value === selectedLanguage
  );

  // Обработчик изменения языка
  const handleChange = (value) => {
    // Отправляем действие для обновления выбранного языка в Redux
    dispatch(updateSelectedLanguage(value));
  };

  // Функция для сохранения изменения языка
  const saveLanguage = (changeLanguage, value) => {
    // Вызываем переданную функцию для изменения языка
    changeLanguage(value);
  };

  // Возвращаем опции для выбора языка, текущий выбранный язык и обработчики
  return { options, selectedOption, handleChange, saveLanguage };
};
