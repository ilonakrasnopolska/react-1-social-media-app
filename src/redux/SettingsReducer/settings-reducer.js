import {createSlice} from '@reduxjs/toolkit';
import avatars from "../assets/Avatars-src";
import {
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

// Константы
const baseSettingsUrl = '/settings/';

// Счетчики
let settingsIdCounter = 1;
let urlIdCounter = 1;
let termIdCounter = 1;
let confOptionIdCounter = 1;
let confSettingIdCounter = 1;

//Базовый state
const initialState = {
  settings: [
    {
      title: 'PersonalAccount', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Confidentiality', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Language', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'TermsAndPolicy', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Help', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Out', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },

  ],
  personalAccount: {
    userData: {
      avatar: avatars.ilonaSue,
      name: 'Ilona Sue',
      dateOfBirth: '1999-07-09',
      city: 'Haifa',
      gender: 'Female',
      favoriteAnime: 'Naruto'
    },
    editPage: {
      title: "Edit Profile", id: settingsIdCounter++,  url: `${baseSettingsUrl}${urlIdCounter++}`
    },
    errors: {
      nameError: '',
      cityError: '',
      favAnimeError: ''
    },
    isFormValid: true,
  },
  confidentiality: {
    confidentialitySettings: [
      {
        id: confOptionIdCounter++,
        title: "Profile Visibility",
        description: "Choose Who Can See Your Profile And Activity",
        checked: "Public",
        settings: [
          {id: confSettingIdCounter++, name: "Public", value: "Public"},
          {id: confSettingIdCounter++, name: "FriendsOnly", value: "Friends"},
          {id: confSettingIdCounter++, name: "Private", value: "Private"},
        ],
      },
      {
        id: confOptionIdCounter++,
        title: "Data Sharing",
        description: "Control How Your Data Is Shared With Third Party Services",
        checked: "Allow Data Sharing",
        settings: [
          {id: confSettingIdCounter++, name: "Allow Data Sharing", value: "Allow Data Sharing"},
          {id: confSettingIdCounter++, name: "Disable Data Sharing", value: "Disable Data Sharing"},
        ],
      },
      {
        id: confOptionIdCounter++,
        title: "Ad Preferences",
        description: "Manage Ad Personalization Based On Your Activity",
        checked: "EnablePersonalizedAds",
        settings: [
          {id: confSettingIdCounter++, name: "Enable Personalized Ads", value: "Enable Personalized Ads"},
          {id: confSettingIdCounter++, name: "Disable Personalized Ads", value: "Disable Personalized Ads"},
        ],
      },
    ],
    selectedConfidentialitySettings: {
      profileVisibility: "Public",
      dataSharing: true,
      adPreferences: true,
    },
  },
  languageSettings: {
    languages: {
      en: { name: 'English', code: 'en' },
      ru: { name: 'Russian', code: 'ru' },
    },
    selectedLanguage: 'en',
  },
  termsAndConditions: [
    {
      term: 'Account Responsibility', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: 'Users must provide accurate and up-to-date information when creating an account.'
        },
        {
          text: 'Keep your account login details secure and do not share them with others.'
        },
        {
          text: 'Notify us immediately if you suspect unauthorized access to your account.',
        }
      ],
    },
    {
      term: 'Respectful Behavior', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: 'Treat other users with respect and avoid harassment, bullying, or discrimination.',
        },
        {
          text: 'Do not post or share content that is offensive, harmful, or violates the rights of others.',
        },
      ]
    },
    {
      term: 'Legal Use Only', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: 'Use the platform only for lawful purposes.',
        },
        {
          text: 'Do not engage in activities that violate any laws or regulations.',
        },
      ],
    },
    {
      term: 'No Spam Or Bots', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: 'Do not use the platform to send spam, unsolicited messages, or automated scripts.',
        },
        {
          text: 'Avoid creating multiple fake accounts or manipulating the system.',
        },
      ]
    },
    {
      term: 'Intellectual Property', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: `Do not upload or share content that infringes on someone else's copyrights,` +
            `trademarks, or other rights.`,
        },
        {
          text: `Respect the intellectual property of the platform and do not copy, modify,` +
            `or distribute any part of it.`,
        }
      ],
    },
    {
      term: 'Content Guidelines', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: `Ensure that any content you post complies with community standards and is appropriate for all users.`,
        },
        {
          text: `Do not share explicit or adult content , misinformation or fake news`,
        }
      ],
    },
    {
      term: 'Reporting Violations', id: termIdCounter++,
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
      term: 'Compliance With Updates', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: `Regularly review updates to the Terms and Policies and comply with the most recent rules.`,
        },
      ],
    },
    {
      term: 'Consequences Of Violations', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: `Understand that violations may result in warnings, temporary suspension, or permanent account termination.`,
        }
      ],
    },
    {
      term: 'Age Requirement', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: `You must be at least [insert minimum age, e.g., 13 or 16, depending on the platform] to use the platform.`,
        }
      ],
    },
  ],
  helpCenter: {
    userQueries: [],
    requestUserNameText: '',
    requestMessageText: '',
    errors: {
      userNameError: '',
      messageError: ''
    }
  },
  logOut: {
    goBack: {
      name: "Settings",
      url: "/settings",
      id: 5,
    },
    goOut: {
      name: "LogIn",
      url: "/logIn",
      id: 6,
    },
  },
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    editPersonalInfoText: (state, action) => {
      editPersonalInfoTextHelper(state, action)
        state.personalAccount.errors.nameError = '';
        state.personalAccount.errors.cityError = '';
        state.personalAccount.errors.favAnimeError = '';
    },
    saveConfidentialSettings: (state) => {
      saveConfidentialSettingsHelper(state)
    },
    updateConfidentialitySetting: (state, action) => {
      updateConfidentialitySettingHelper(state, action)
    },
    updateSelectedLanguage: (state, action) => {
      updateSelectedLanguageHelper(state, action)
    },
    toggleTerm: (state, action) => {
      toggleTermHelper(state, action)
    },
    updateRequestUserNameText: (state, action) => {
      updateRequestUserNameTextHelper(state, action)
      state.helpCenter.errors.userNameError = '';
    },
    updateRequestMessageText: (state, action) => {
      updateRequestMessageTextHelper(state, action)
      state.helpCenter.errors.messageError = '';
    },
    sendSupportMessage: (state) => {
      sendSupportMessageHelper(state)
    },
    validateRequestForHelpForm: (state) => {
      validateRequestForHelpFormHelper(state)
    },
    validateEditAccountForm: (state) => {
      validateEditAccountFormHelper(state)
    }
  }
})

export const {
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
