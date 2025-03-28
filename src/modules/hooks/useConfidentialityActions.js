import { useDispatch } from "react-redux";
import {
  saveConfidentialSettings,
  updateConfidentialitySetting,
} from "../../redux/SettingsReducer/settings-reducer";

// Хук для работы с действиями конфиденциальности
export const useConfidentialityActions = () => {
  const dispatch = useDispatch();

  // Обработчик изменения настройки конфиденциальности
  const handleChange = (settingValue, settingTitle) => {
    // Диспатчим изменение настройки конфиденциальности
    dispatch(updateConfidentialitySetting({ settingValue, settingTitle }));
  };

  // Обработчик сохранения настроек конфиденциальности
  const savePrivacySettings = (event) => {
    event.preventDefault();
    // Диспатчим сохранение настроек
    dispatch(saveConfidentialSettings());
  };

  return { handleChange, savePrivacySettings };
};
