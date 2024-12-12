import {useDispatch} from "react-redux";
import {saveConfidentialSettings, updateConfidentialitySetting} from "../../redux/SettingsReducer/settings-reducer";

export const useConfidentialityActions = () => {
  const dispatch = useDispatch();

  const handleChange = (settingValue, settingTitle) => {
    dispatch(updateConfidentialitySetting({ settingValue, settingTitle }));
  };

  const savePrivacySettings = (event) => {
    event.preventDefault();
    dispatch(saveConfidentialSettings());
  };

  return {handleChange, savePrivacySettings}
}
