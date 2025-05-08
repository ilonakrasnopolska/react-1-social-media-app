import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
import {
  SETTINGS_LIST_TITLE,
  CONFIDENTIALITY_TITLE,
  CONFIDENTIALITY_CHECKED,
  CONFIDENTIALITY_SETTINGS,
  LANGUAGES_TITLE,
  TERMS_TITLE,
  TERMS_DESCRIPTION,
  LOG_TITLE,
  LOG_URL,
} from "../../constants/state-constants";
import {
  setProfileDataEditHelper,
  editPersonalInfoTextHelper,
  toggleTermHelper,
  updateRequestMessageTextHelper,
  sendSupportMessageHelper,
  updateRequestUserNameTextHelper,
  updateConfidentialitySettingHelper,
  saveConfidentialSettingsHelper,
  updateSelectedLanguageHelper,
  validateEditAccountFormHelper,
  validateRequestForHelpFormHelper,
} from "./SettingsHelpers/settings-helpers";

//Базовый state
const initialState = {
  settings: [
    {
      title: SETTINGS_LIST_TITLE.PERSONAL_ACCOUNT,
      id: uuidv4(),
    },
    {
      title: SETTINGS_LIST_TITLE.CONFIDENTIALITY,
      id: uuidv4(),
    },
    {
      title: SETTINGS_LIST_TITLE.LANGUAGE,
      id: uuidv4(),
    },
    {
      title: SETTINGS_LIST_TITLE.TERMS_AND_POLICY,
      id: uuidv4(),
    },
    {
      title: SETTINGS_LIST_TITLE.HELP,
      id: uuidv4(),
    },
    {
      title: SETTINGS_LIST_TITLE.OUT,
      id: uuidv4(),
    },
  ],
  personalAccount: {
    userData: {},
    editPage: {
      title: SETTINGS_LIST_TITLE.EDIT_PROFILE,
      id: uuidv4(),
    },
    errors: {
      nameError: "",
      cityError: "",
      favAnimeError: "",
    },
    isFormValid: true,
  },
  confidentiality: {
    confidentialitySettings: [
      {
        id: uuidv4(),
        title: CONFIDENTIALITY_TITLE.VISIBILITY,
        description: CONFIDENTIALITY_SETTINGS.CONFIDENTIALITY_desc,
        checked: CONFIDENTIALITY_CHECKED.PUBLIC,
        settings: [
          {
            id: uuidv4(),
            name: CONFIDENTIALITY_SETTINGS.PUBLIC,
            value: CONFIDENTIALITY_SETTINGS.PUBLIC,
          },
          {
            id: uuidv4(),
            name: CONFIDENTIALITY_SETTINGS.FRIENDS_ONLY,
            value: CONFIDENTIALITY_SETTINGS.FRIENDS_value,
          },
          {
            id: uuidv4(),
            name: CONFIDENTIALITY_SETTINGS.PRIVATE,
            value: CONFIDENTIALITY_SETTINGS.PRIVATE,
          },
        ],
      },
      {
        id: uuidv4(),
        title: CONFIDENTIALITY_TITLE.DATA_SHARING,
        description: CONFIDENTIALITY_SETTINGS.DATA_SHARING_desc,
        checked: CONFIDENTIALITY_CHECKED.DATA_SHARING,
        settings: [
          {
            id: uuidv4(),
            name: CONFIDENTIALITY_SETTINGS.DATA_SHARING,
            value: CONFIDENTIALITY_SETTINGS.DATA_SHARING,
          },
          {
            id: uuidv4(),
            name: CONFIDENTIALITY_SETTINGS.DISABLE_DATA_SHARING,
            value: CONFIDENTIALITY_SETTINGS.DISABLE_DATA_SHARING,
          },
        ],
      },
      {
        id: uuidv4(),
        title: CONFIDENTIALITY_TITLE.AD_PREFERENCES,
        description: CONFIDENTIALITY_SETTINGS.AD_PREFERENCES_desc,
        checked: CONFIDENTIALITY_CHECKED.AD_PREFERENCES,
        settings: [
          {
            id: uuidv4(),
            name: CONFIDENTIALITY_SETTINGS.AD_PREFERENCES,
            value: CONFIDENTIALITY_SETTINGS.AD_PREFERENCES,
          },
          {
            id: uuidv4(),
            name: CONFIDENTIALITY_SETTINGS.DISABLE_AD_PREFERENCES,
            value: CONFIDENTIALITY_SETTINGS.DISABLE_AD_PREFERENCES,
          },
        ],
      },
    ],
    selectedConfidentialitySettings: {
      profileVisibility: CONFIDENTIALITY_SETTINGS.PUBLIC,
      dataSharing: true,
      adPreferences: true,
    },
  },
  languageSettings: {
    languages: {
      en: { name: LANGUAGES_TITLE.ENGLISH, code: LANGUAGES_TITLE.CODE_EN },
      ru: { name: LANGUAGES_TITLE.RUSSIAN, code: LANGUAGES_TITLE.CODE_RU },
    },
    selectedLanguage: LANGUAGES_TITLE.CODE_EN,
  },
  termsAndConditions: [
    {
      term: TERMS_TITLE.ACCOUNT_RESPONSIBILITY,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.ACCOUNT_RESPONSIBILITY_1,
        },
        {
          text: TERMS_DESCRIPTION.ACCOUNT_RESPONSIBILITY_2,
        },
        {
          text: TERMS_DESCRIPTION.ACCOUNT_RESPONSIBILITY_3,
        },
      ],
    },
    {
      term: TERMS_TITLE.RESPECTFUL_BEHAVIOR,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.RESPECTFUL_BEHAVIOR_1,
        },
        {
          text: TERMS_DESCRIPTION.RESPECTFUL_BEHAVIOR_2,
        },
      ],
    },
    {
      term: TERMS_TITLE.LEGAL_USE_ONLY,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.LEGAL_USE_ONLY_1,
        },
        {
          text: TERMS_DESCRIPTION.LEGAL_USE_ONLY_2,
        },
      ],
    },
    {
      term: TERMS_TITLE.NO_SPAM,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.NO_SPAM_1,
        },
        {
          text: TERMS_DESCRIPTION.NO_SPAM_2,
        },
      ],
    },
    {
      term: TERMS_TITLE.INTELLECTUAL_PROPERTY,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.INTELLECTUAL_PROPERTY_1,
        },
        {
          text: TERMS_DESCRIPTION.INTELLECTUAL_PROPERTY_2,
        },
      ],
    },
    {
      term: TERMS_TITLE.CONTENT_GUIDELINES,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.CONTENT_GUIDELINES_1,
        },
        {
          text: TERMS_DESCRIPTION.CONTENT_GUIDELINES_2,
        },
      ],
    },
    {
      term: TERMS_TITLE.REPORTING_VIOLATIONS,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.REPORTING_VIOLATIONS_1,
        },
        {
          text: TERMS_DESCRIPTION.REPORTING_VIOLATIONS_2,
        },
      ],
    },
    {
      term: TERMS_TITLE.COMPLIANCE_WITH_UPDATES,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.COMPLIANCE_WITH_UPDATES_1,
        },
      ],
    },
    {
      term: TERMS_TITLE.CONSEQUENCES_OF_VIOLATIONS,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.CONSEQUENCES_OF_VIOLATIONS_1,
        },
      ],
    },
    {
      term: TERMS_TITLE.AGE_REQUIREMENT,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: TERMS_DESCRIPTION.AGE_REQUIREMENT_1,
        },
      ],
    },
  ],
  helpCenter: {
    userQueries: [],
    requestUserNameText: "",
    requestMessageText: "",
    errors: {
      userNameError: "",
      messageError: "",
    },
    isMessageSend: false,
  },
  logOut: {
    goBack: {
      name: LOG_TITLE.SETTINGS,
      url: LOG_URL.SETTINGS,
      id: 5,
    },
    goOut: {
      name: LOG_TITLE.LOG_IN,
      url: LOG_URL.LOG_IN,
      id: 6,
    },
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    // Обработка изменения данных профиля
    setProfileDataEdit: (state, action) => {
      setProfileDataEditHelper(state, action);
    },
    // Изменение текста личной информации
    editPersonalInfoText: (state, action) => {
      editPersonalInfoTextHelper(state, action);
      state.personalAccount.errors.nameError = "";
      state.personalAccount.errors.cityError = "";
      state.personalAccount.errors.favAnimeError = "";
    },
    // Сохранение настроек конфиденциальности
    saveConfidentialSettings: (state) => {
      saveConfidentialSettingsHelper(state);
    },
    // Обновление настроек конфиденциальности
    updateConfidentialitySetting: (state, action) => {
      updateConfidentialitySettingHelper(state, action);
    },
    // Обновление выбранного языка
    updateSelectedLanguage: (state, action) => {
      updateSelectedLanguageHelper(state, action);
    },
    // Переключение условий
    toggleTerm: (state, action) => {
      toggleTermHelper(state, action);
    },
    // Обновление текста имени пользователя при запросе
    updateRequestUserNameText: (state, action) => {
      updateRequestUserNameTextHelper(state, action);
      state.helpCenter.errors.userNameError = "";
    },
    // Обновление текста сообщения при запросе
    updateRequestMessageText: (state, action) => {
      updateRequestMessageTextHelper(state, action);
      state.helpCenter.errors.messageError = "";
    },
    // Отправка сообщения в службу поддержки
    sendSupportMessage: (state) => {
      sendSupportMessageHelper(state);
    },
    // Валидация формы запроса помощи
    validateRequestForHelpForm: (state) => {
      validateRequestForHelpFormHelper(state);
    },
    // Валидация формы редактирования аккаунта
    validateEditAccountForm: (state) => {
      validateEditAccountFormHelper(state);
    },
  },
});

export const {
  setProfileDataEdit,
  editPersonalInfoText,
  saveConfidentialSettings,
  updateConfidentialitySetting,
  updateSelectedLanguage,
  toggleTerm,
  updateRequestUserNameText,
  updateRequestMessageText,
  sendSupportMessage,
  validateRequestForHelpForm,
  validateEditAccountForm,
} = settingsSlice.actions;
export default settingsSlice.reducer;
