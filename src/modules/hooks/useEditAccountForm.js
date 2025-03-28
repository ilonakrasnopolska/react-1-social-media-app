import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileInfo } from "../../redux/ProfileReducer/profile-reducer";
import {
  editPersonalInfoText,
  validateEditAccountForm,
} from "../../redux/SettingsReducer/settings-reducer";

// Кастомный хук для работы с формой редактирования аккаунта
export const useEditAccountForm = (personalAccount) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Получаем данные страницы "PersonalAccount" из хранилища
  const personalAccountPage = useSelector((state) =>
    state.settings.settings.find((page) => page.title === "PersonalAccount")
  );

  // Данные пользователя, валидность формы и ошибки
  const { userData, isFormValid, errors } = personalAccount;

  // Обработчик сохранения изменений в профиле
  const handleSaveChanges = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    if (!isFormValid) return; // Если форма невалидна, то ничего не сохраняем
    dispatch(updateProfileInfo(userData)); // Диспатчим изменения профиля в хранилище
    navigate(`/settings/${personalAccountPage.id}`); // Перенаправляем на страницу настроек
  };

  // Обработчик изменения значений в форме
  const handleValueChanges = (key, value) => {
    dispatch(editPersonalInfoText({ key, value })); // Обновляем данные в хранилище
    dispatch(validateEditAccountForm()); // Проводим валидацию формы
  };

  // Функция для предотвращения ввода чисел в поля формы
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

    // Если в данных есть цифры, блокируем их ввод
    if (/\d/.test(inputData)) {
      e.preventDefault(); // Останавливаем стандартное поведение события
    }
  };

  return {
    userData, // Данные пользователя для формы
    isFormValid, // Флаг, показывающий валидна ли форма
    errors, // Ошибки валидации формы
    handleSaveChanges, // Функция для сохранения изменений
    handleValueChanges, // Функция для обновления значений формы
    preventNumericInput, // Функция для предотвращения ввода чисел
  };
};
