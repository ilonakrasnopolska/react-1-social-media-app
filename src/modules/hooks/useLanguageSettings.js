import {useDispatch, useSelector} from "react-redux";
import {updateSelectedLanguage} from "../../redux/SettingsReducer/settings-reducer";

export const useLanguageSettings = () => {
  const dispatch = useDispatch();
  const { languages, selectedLanguage } = useSelector((state) => state.settings.languageSettings);

  const options = Object.values(languages).map((lang) => ({
    value: lang.code,
    label: lang.name,
  }));

  const selectedOption = options.find((option) => option.value === selectedLanguage);

  const handleChange = (value) => {
    dispatch(updateSelectedLanguage(value));
  };

  const saveLanguage = (changeLanguage, value) => {
    changeLanguage(value)
  };

  return { options, selectedOption, handleChange, saveLanguage };
};
