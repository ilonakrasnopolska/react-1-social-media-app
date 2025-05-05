import { current } from "@reduxjs/toolkit";
// Обновление данных профиля с помощью action.payload
export const setProfileDataEditHelper = (state, action) => {
  state.personalAccount.userData = action.payload;
};

// Редактирование текста личной информации
export const editPersonalInfoTextHelper = (state, action) => {
  const { key, value } = action.payload;

  // Проверяем, существует ли ключ в userData
  if (state.personalAccount.userData[key] !== undefined) {
    // Если редактируется дата рождения
    if (key === 'dateOfBirth') {
      // Преобразуем строку в объект Date
      const date = new Date(value);
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });

      // Обновляем отформатированное значение
      state.personalAccount.userData.dateOfBirth = `${day} ${month}`;
    } else {
      // Обновляем остальную информацию в userData
      state.personalAccount.userData[key] = value;
    }
  }
};

// Обновление выбранного языка
export const updateSelectedLanguageHelper = (state, action) => {
  state.languageSettings.selectedLanguage = action.payload;
};

// Переключение состояния термина (открыт/закрыт)
export const toggleTermHelper = (state, action) => {
  const term = state.termsAndConditions.find((t) => t.id === action.payload);

  if (term) {
    // Изменяем состояние термина (открыт или закрыт)
    term.isOpen = !term.isOpen;
  }
};

// Обновление текста запроса имени пользователя
export const updateRequestUserNameTextHelper = (state, action) => {
  state.helpCenter.requestUserNameText = action.payload;
};

// Обновление текста запроса сообщения
export const updateRequestMessageTextHelper = (state, action) => {
  state.helpCenter.requestMessageText = action.payload;
};

// Отправка сообщения в службу поддержки
export const sendSupportMessageHelper = (state) => {
  // Проверка на наличие ошибок в имени или сообщении
  if (state.helpCenter.errors.userNameError || state.helpCenter.errors.messageError) return;

  // Проверяем, что имя и сообщение не пустые
  if (state.helpCenter.requestMessageText.trim() !== '' && state.helpCenter.requestUserNameText.trim() !== '') {
    state.helpCenter.isMessageSend = true;
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    // Формируем новый запрос
    const newRequest = {
      id: Date.now(),
      user: state.helpCenter.requestUserNameText,
      text: state.helpCenter.requestMessageText,
      status: 'unread',
      timestamp: formattedTime,
    };

    // Добавляем новый запрос в очередь
    state.helpCenter.userQueries.push(newRequest);

    // Очищаем текстовые поля
    state.helpCenter.requestMessageText = '';
    state.helpCenter.requestUserNameText = '';
  }
};

// Валидация формы запроса помощи
export const validateRequestForHelpFormHelper = (state) => {
  let isValid = true;
  state.helpCenter.isMessageSend = false;
  const requestErrors = { userNameError: '', messageError: '' };
  console.log(current(state.helpCenter));

  // Проверка на пустое имя
  if (state.helpCenter.requestUserNameText.trim() === '') {
    requestErrors.userNameError = 'Name cannot be empty';
    isValid = false;
    state.helpCenter.isMessageSend = false;
  }

  // Проверка на цифры в имени
  if (/\d/.test(state.helpCenter.requestUserNameText)) {
    requestErrors.userNameError = 'Name cannot contain numbers';
    isValid = false;
    state.helpCenter.isMessageSend = false;
  }

  // Проверка на пустое сообщение
  if (state.helpCenter.requestMessageText.trim() === '') {
    requestErrors.messageError = 'Message cannot be empty';
    isValid = false;
    state.helpCenter.isMessageSend = false;
  }

  // Проверка на цифры в сообщении
  if (/\d/.test(state.helpCenter.requestMessageText)) {
    requestErrors.messageError = 'Message cannot contain numbers';
    isValid = false;
    state.helpCenter.isMessageSend = false;
  }

  // Проверка длины сообщения
  if (state.helpCenter.requestMessageText.trim().length > 200) {
    requestErrors.messageError = 'Message cannot be longer than 200 characters';
    isValid = false;
    state.helpCenter.isMessageSend = false;
  }

  // Обновляем ошибки в state
  state.helpCenter.errors = requestErrors;
  if (isValid) {
    console.log(current(state.helpCenter));
    state.helpCenter.isMessageSend = true;
  }
  return isValid; // Возвращаем true, если форма валидна
};

// Валидация формы редактирования профиля
export const validateEditAccountFormHelper = (state) => {
  let isValid = true;
  const profileErrors = { cityError: '', nameError: '', favAnimeError: '' };

  // Проверка на пустое имя в профиле
  if (state.personalAccount.userData.name.trim() === '') {
    profileErrors.nameError = 'Name cannot be empty';
    isValid = false;
  }

  // Проверка на пустой город в профиле
  if (state.personalAccount.userData.city.trim() === '') {
    profileErrors.cityError = 'City cannot be empty';
    isValid = false;
  }

  // Проверка на пустое название аниме
  if (state.personalAccount.userData.favoriteAnime.trim() === '') {
    profileErrors.favAnimeError = 'The field cannot be empty';
    isValid = false;
  }

  // Обновляем ошибки в state
  state.personalAccount.errors = profileErrors;
  state.personalAccount.isFormValid = isValid;

  return isValid; // Возвращаем true, если форма валидна
};

// Обновление настроек конфиденциальности
export const updateConfidentialitySettingHelper = (state, action) => {
  const { settingValue, settingTitle } = action.payload;
  const confidentialitySetting = state.confidentiality.confidentialitySettings.find(
    (setting) => setting.title === settingTitle
  );

  if (confidentialitySetting) {
    // Обновляем значение для выбранной настройки
    confidentialitySetting.checked = settingValue;
  }
};

// Сохранение настроек конфиденциальности
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
};
