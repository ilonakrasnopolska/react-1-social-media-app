import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";
import {
  SETTINGS_LIST_TITLE,
  CONFIDENTIALITY_TITLE,
  CONFIDENTIALITY_CHECKED,
  CONFIDENTIALITY_SETTINGS,
  LANGUAGES_TITLE,
  TERMS_TITLE,
  LOG_TITLE,
  LOG_URL,
} from "../../constants/constants";
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
          { id: uuidv4(), name: CONFIDENTIALITY_SETTINGS.PUBLIC, value: CONFIDENTIALITY_SETTINGS.PUBLIC },
          { id: uuidv4(), name: CONFIDENTIALITY_SETTINGS.FRIENDS_ONLY, value: CONFIDENTIALITY_SETTINGS.FRIENDS_value},
          { id: uuidv4(), name: CONFIDENTIALITY_SETTINGS.PRIVATE, value: CONFIDENTIALITY_SETTINGS.PRIVATE },
        ],
      },
      {
        id: uuidv4(),
        title: CONFIDENTIALITY_TITLE.DATA_SHARING,
        description:
        CONFIDENTIALITY_SETTINGS.DATA_SHARING_desc,
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
          text: "Users must provide accurate and up-to-date information when creating an account.",
        },
        {
          text: "Keep your account login details secure and do not share them with others.",
        },
        {
          text: "Notify us immediately if you suspect unauthorized access to your account.",
        },
      ],
    },
    {
      term: TERMS_TITLE.RESPECTFUL_BEHAVIOR,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: "Treat other users with respect and avoid harassment, bullying, or discrimination.",
        },
        {
          text: "Do not post or share content that is offensive, harmful, or violates the rights of others.",
        },
      ],
    },
    {
      term: TERMS_TITLE.LEGAL_USE_ONLY,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: "Use the platform only for lawful purposes.",
        },
        {
          text: "Do not engage in activities that violate any laws or regulations.",
        },
      ],
    },
    {
      term: TERMS_TITLE.NO_SPAM,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: "Do not use the platform to send spam, unsolicited messages, or automated scripts.",
        },
        {
          text: "Avoid creating multiple fake accounts or manipulating the system.",
        },
      ],
    },
    {
      term: TERMS_TITLE.INTELLECTUAL_PROPERTY,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text:
            `Do not upload or share content that infringes on someone else's copyrights,` +
            `trademarks, or other rights.`,
        },
        {
          text:
            `Respect the intellectual property of the platform and do not copy, modify,` +
            `or distribute any part of it.`,
        },
      ],
    },
    {
      term: TERMS_TITLE.CONTENT_GUIDELINES,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: `Ensure that any content you post complies with community standards and is appropriate for all users.`,
        },
        {
          text: `Do not share explicit or adult content , misinformation or fake news`,
        },
      ],
    },
    {
      term: TERMS_TITLE.REPORTING_VIOLATIONS,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: `Report any suspicious or harmful behavior to our support team.`,
        },
        {
          text: `Do not misuse the reporting tools to harass or falsely accuse others.`,
        },
      ],
    },
    {
      term: TERMS_TITLE.COMPLIANCE_WITH_UPDATES,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: `Regularly review updates to the Terms and Policies and comply with the most recent rules.`,
        },
      ],
    },
    {
      term: TERMS_TITLE.CONSEQUENCES_OF_VIOLATIONS,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: `Understand that violations may result in warnings, temporary suspension, or permanent account termination.`,
        },
      ],
    },
    {
      term: TERMS_TITLE.AGE_REQUIREMENT,
      id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: `You must be at least [insert minimum age, e.g., 13 or 16, depending on the platform] to use the platform.`,
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
    setProfileDataEdit: (state, action) => {
      setProfileDataEditHelper(state, action);
    },
    editPersonalInfoText: (state, action) => {
      editPersonalInfoTextHelper(state, action);
      state.personalAccount.errors.nameError = "";
      state.personalAccount.errors.cityError = "";
      state.personalAccount.errors.favAnimeError = "";
    },
    saveConfidentialSettings: (state) => {
      saveConfidentialSettingsHelper(state);
    },
    updateConfidentialitySetting: (state, action) => {
      updateConfidentialitySettingHelper(state, action);
    },
    updateSelectedLanguage: (state, action) => {
      updateSelectedLanguageHelper(state, action);
    },
    toggleTerm: (state, action) => {
      toggleTermHelper(state, action);
    },
    updateRequestUserNameText: (state, action) => {
      updateRequestUserNameTextHelper(state, action);
      state.helpCenter.errors.userNameError = "";
    },
    updateRequestMessageText: (state, action) => {
      updateRequestMessageTextHelper(state, action);
      state.helpCenter.errors.messageError = "";
    },
    sendSupportMessage: (state) => {
      sendSupportMessageHelper(state);
    },
    validateRequestForHelpForm: (state) => {
      validateRequestForHelpFormHelper(state);
    },
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
