import {createSlice} from '@reduxjs/toolkit';
import {toggleTermHelper,
  updateContactMessageTextHelper
} from "./SettingsHelpers/settings-helpers";

// Константы
const baseSettingsUrl = '/settings/';

// Счетчики
let settingsIdCounter = 1;
let optionsIdCounter = 1;
let urlIdCounter = 1;
let termIdCounter = 1;

//Базовый state
const initialState = {
  settings: [
    {
      title: 'Personal account', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Confidentiality', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Notifications', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Insights', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Language', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Terms and policy', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Help', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Log out', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
  ],
  languages: [
    {name: 'English', code: 'en', id: optionsIdCounter++},
    {name: 'Spanish', code: 'es', id: optionsIdCounter++},
    {name: 'Russian', code: 'ru', id: optionsIdCounter++},
    {name: 'German', code: 'de', id: optionsIdCounter++},
  ],
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
      term: 'No Spam or Bots', id: termIdCounter++,
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
          text: `Respect the intellectual property of the platform and do not copy, modify,`+
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
      term: 'Compliance with Updates', id: termIdCounter++,
      isOpen: false,
      description: [
        {
          text: `Regularly review updates to the Terms and Policies and comply with the most recent rules.`,
        },
      ],
    },
    {
      term: 'Consequences of Violations', id: termIdCounter++,
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
  contactMessageText: '',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTerm: (state, action) => {
      toggleTermHelper(state, action)
    },
    updateContactMessageText: (state, action) => {
      updateContactMessageTextHelper(state, action)
    }
  }
})

export const {
  toggleTerm,
} = settingsSlice.actions;
export default settingsSlice.reducer;
