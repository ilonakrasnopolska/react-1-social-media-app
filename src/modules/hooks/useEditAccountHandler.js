import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileInfo} from "../../redux/ProfileReducer/profile-reducer";
import {editPersonalInfoText, validateEditAccountForm} from "../../redux/SettingsReducer/settings-reducer";

export const useEditAccountHandler = (personalAccount) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Получаем данные из store
  const personalAccountPage = useSelector((state) =>
    state.settings.settings.find((page) => page.title === "Personal account")
  );

  const { userData, isFormValid, errors } = personalAccount;

  // Сохраняем изменения
  const onSaveChange = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    dispatch(updateProfileInfo(userData));
    navigate(personalAccountPage.url);
  };

  const onValueChange = (key, value) => {
    dispatch(editPersonalInfoText({key, value}))
    dispatch(validateEditAccountForm());
  };

  const onKeyDownTest = (e) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onPasteTest = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (/\d/.test(pasteData)) {
      e.preventDefault();
    }
  };

  return {
    userData,
    isFormValid,
    errors,
    onSaveChange,
    onValueChange,
    onKeyDownTest,
    onPasteTest
  };
};
