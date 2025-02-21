import { v4 as uuidv4 } from 'uuid';
import {createSlice} from '@reduxjs/toolkit';
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
      title: 'PersonalAccount', id: uuidv4(),
    },
    {
      title: 'Confidentiality', id: uuidv4(),
    },
    {
      title: 'Language', id: uuidv4(),
    },
    {
      title: 'TermsAndPolicy', id: uuidv4(),
    },
    {
      title: 'Help', id: uuidv4(),
    },
    {
      title: 'Out', id: uuidv4(),
    },

  ],
  personalAccount: { userData: {},
    editPage: {
      title: "EditProfile", id:  uuidv4(),
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
        id: uuidv4(),
        title: "Profile Visibility",
        description: "Choose Who Can See Your Profile And Activity",
        checked: "Public",
        settings: [
          {id: uuidv4(), name: "Public", value: "Public"},
          {id: uuidv4(), name: "FriendsOnly", value: "Friends"},
          {id: uuidv4(), name: "Private", value: "Private"},
        ],
      },
      {
        id: uuidv4(),
        title: "Data Sharing",
        description: "Control How Your Data Is Shared With Third Party Services",
        checked: "Allow Data Sharing",
        settings: [
          {id: uuidv4(), name: "Allow Data Sharing", value: "Allow Data Sharing"},
          {id: uuidv4(), name: "Disable Data Sharing", value: "Disable Data Sharing"},
        ],
      },
      {
        id: uuidv4(),
        title: "Ad Preferences",
        description: "Manage Ad Personalization Based On Your Activity",
        checked: "EnablePersonalizedAds",
        settings: [
          {id: uuidv4(), name: "Enable Personalized Ads", value: "Enable Personalized Ads"},
          {id: uuidv4(), name: "Disable Personalized Ads", value: "Disable Personalized Ads"},
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
      term: 'Account Responsibility', id: uuidv4(),
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
      term: 'Respectful Behavior', id: uuidv4(),
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
      term: 'Legal Use Only', id: uuidv4(),
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
      term: 'No Spam Or Bots', id: uuidv4(),
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
      term: 'Intellectual Property', id: uuidv4(),
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
      term: 'Content Guidelines', id: uuidv4(),
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
      term: 'Reporting Violations', id: uuidv4(),
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
      term: 'Compliance With Updates', id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: `Regularly review updates to the Terms and Policies and comply with the most recent rules.`,
        },
      ],
    },
    {
      term: 'Consequences Of Violations', id: uuidv4(),
      isOpen: false,
      description: [
        {
          text: `Understand that violations may result in warnings, temporary suspension, or permanent account termination.`,
        }
      ],
    },
    {
      term: 'Age Requirement', id: uuidv4(),
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
    setProfileDataEdit: (state, action) => {
      setProfileDataEditHelper(state, action)
    },
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
