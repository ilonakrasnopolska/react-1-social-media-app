export const editPersonalInfoTextHelper = (state, action) => {
  const { key, value } = action.payload;
  if (state.personalAccount.userData[key] !== undefined) {
    state.personalAccount.userData[key] = value;
  }
}
export const toggleTermHelper = (state, action) => {
  const term = state.termsAndConditions.find((t) => t.id === action.payload);
  if (term) {
    term.isOpen = !term.isOpen;
  }
}
export const updateRequestUserNameTextHelper = (state, action) => {
  return state.helpCenter.requestUserNameText = action.payload;
}
export const updateRequestMessageTextHelper = (state, action) => {
  return state.helpCenter.requestMessageText = action.payload;
}
export const sendSupportMessageHelper = (state) => {
  if (state.helpCenter.errors.userNameError || state.helpCenter.errors.messageError) return;

  if (state.helpCenter.requestMessageText.trim() !== ''
    && state.helpCenter.requestUserNameText.trim() !== '') {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });


    const newRequest = {
      id: Date.now(),
      user: state.helpCenter.requestUserNameText,
      text: state.helpCenter.requestMessageText,
      status: 'unread',
      timestamp: formattedTime,
    }

    state.helpCenter.userQueries.push(newRequest);

    state.helpCenter.requestMessageText = '';
    state.helpCenter.requestUserNameText = '';
    return state;
  }
}
export const validateFormHelper = (state) => {
  let isValid = true;
  const newErrors = { userNameError: '', messageError: '' };

  // Проверка на пустое имя
  if (state.helpCenter.requestUserNameText.trim() === '') {
    newErrors.userNameError = 'Name cannot be empty';
    isValid = false;
  }

  // Проверка на цифры в имени
  if (/\d/.test(state.helpCenter.requestUserNameText)) {
    newErrors.userNameError = 'Name cannot contain numbers';
    isValid = false;
  }

  // Проверка на пустое сообщение
  if (state.helpCenter.requestMessageText.trim() === '') {
    newErrors.messageError = 'Message cannot be empty';
    isValid = false;
  }

  // Проверка длины сообщения
  if (state.helpCenter.requestMessageText.trim().length > 200) {
    newErrors.messageError = 'Message cannot be longer than 200 characters';
    isValid = false;
  }

  // Обновляем ошибки в state
  state.helpCenter.errors = newErrors;

  return isValid; // Возвращаем true, если форма валидна
}
export const updateConfidentialitySettingHelper = (state, action) => {
  const { settingValue, settingTitle } = action.payload;
  const confidentialitySetting = state.confidentiality.confidentialitySettings.find(
    (setting) => setting.title === settingTitle
  );

  if (confidentialitySetting) {
    confidentialitySetting.checked = settingValue;
  }

}
export const saveConfidentialSettingsHelper = (state) => {
  const confirmSave = window.confirm('Are you sure you want to save the changes?');
  if (confirmSave) {
    const selectedConfidentialitySettings = {};

    state.confidentiality.confidentialitySettings.forEach((setting) => {
      // Преобразуем title в удобный формат ключа для объекта
      const settingKey = setting.title
        .toLowerCase()
        .replace(/ (.)/g, (match, letter) => letter.toUpperCase());

      // Условие для обработки значений
      let value;
      if (setting.title === "Profile Visibility") {
        value = setting.checked;
      } else if (setting.title === "Data Sharing" || setting.title === "Ad Preferences") {
        value = setting.checked === "Allow data sharing" || setting.checked === "Enable personalized ads";
      } else {
        value = false;
      }

      // Добавляем значение в объект
      selectedConfidentialitySettings[settingKey] = value;
    });

    // Обновляем состояние с новыми значениями
    state.confidentiality.selectedConfidentialitySettings = selectedConfidentialitySettings;
  }
}
