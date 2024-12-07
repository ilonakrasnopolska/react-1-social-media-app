import {useDispatch, useSelector} from "react-redux";
import {updateSelectedLanguage} from "../../redux/SettingsReducer/settings-reducer";

export const useLanguageSettings = () => {
  const dispatch = useDispatch();
  const { languages, selectedLanguage } = useSelector((state) => state.settings.languageSettings);

  // Преобразуем объект языков в массив для react-select
  const options = Object.values(languages).map((lang) => ({
    value: lang.code,
    label: lang.name,
  }));

  // Найти выбранный язык в массиве опций
  const currentOption = options.find((option) => option.value === selectedLanguage);

  // Обработчик изменения языка
  const handleChange = (selectedOption) => {
    dispatch(updateSelectedLanguage(selectedOption.value));
  };

  return { options, currentOption, handleChange };
};
