import {useDispatch} from "react-redux";
import {saveConfidentialSettings, updateConfidentialitySetting} from "../../redux/SettingsReducer/settings-reducer";

export const useConfidentialityHandler = () => {
  const dispatch = useDispatch();

  const handleChange = (settingValue, settingTitle) => {
    dispatch(updateConfidentialitySetting({ settingValue, settingTitle }));
  };

  const onChangePrivacySettings = (event) => {
    event.preventDefault();
    dispatch(saveConfidentialSettings());
  };

  return {handleChange, onChangePrivacySettings}
}
