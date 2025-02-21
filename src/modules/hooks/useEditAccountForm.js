import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileInfo} from "../../redux/ProfileReducer/profile-reducer";
import {editPersonalInfoText, validateEditAccountForm} from "../../redux/SettingsReducer/settings-reducer";

export const useEditAccountForm = (personalAccount) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Получаем данные из store
  const personalAccountPage = useSelector((state) =>
    state.settings.settings.find((page) => page.title === "PersonalAccount")
  );

  const { userData, isFormValid, errors } = personalAccount;

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    dispatch(updateProfileInfo(userData));
    navigate(`/settings/${personalAccountPage.id}`);
  };

  const handleValueChanges = (key, value) => {
    dispatch(editPersonalInfoText({key, value}))
    dispatch(validateEditAccountForm());
  };

  const preventNumericInput = (e) => {
    let inputData;

    // Для события нажатия клавиши (keyDown)
    if (e.type === "keydown") {
      inputData = e.key;
    }

    // Для события вставки (paste)
    if (e.type === "paste") {
      inputData = e.clipboardData.getData("text");
    }

    // Проверка на наличие чисел в введенных данных
    if (/\d/.test(inputData)) {
      e.preventDefault();
    }
  };


  return {
    userData,
    isFormValid,
    errors,
    handleSaveChanges,
    handleValueChanges,
    preventNumericInput
  };
};
