import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const useSettingsPageHandler = () => {
  const { id } = useParams();
  const settingsOptions = useSelector((state) => state.settings.settings);
  const editProfileOption = useSelector((state) => state.settings.personalAccount.editPage);

  const enhancedSettingsOptions = id === String(editProfileOption.id)
    ? [...settingsOptions, editProfileOption]
    : settingsOptions;

  const selectedOption = id
    ? enhancedSettingsOptions.find((option) => option.id === Number(id))
    : null;

  return {
    id,
    enhancedSettingsOptions,
    selectedOption,
    isNotFound: id && !selectedOption,
  };
};
