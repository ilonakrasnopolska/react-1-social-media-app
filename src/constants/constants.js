export const baseAnimeUrl = '/anime/';
export const baseMessageUrl = '/messages/';
export const CURRENT_USER_NAME = "Ilona Sue"

export const ANIME_LIST_TYPES = {
  WATCH: 'Watch',
  WATCHED: 'Watched',
  ALL: 'Anime'
};

export const NAV_LIST_NAME = {
  PROFILE: 'Profile',
  MESSAGES: 'Messages',
  FEEDS: 'Feeds',
  ANIME: 'Anime',
  SETTINGS: 'Settings',
  FIND_FRIENDS: 'FindFriends'
};

export const NAV_LIST_URL = {
  PROFILE: '/profile',
  MESSAGES: '/messages',
  FEEDS: '/feeds',
  ANIME: '/anime',
  SETTINGS: '/settings',
  FIND_FRIENDS: '/find_friends'
};

export const FEEDS_LIST_TITLE = {
  TRENDS: 'Trends',
  MANGA: 'Manga',
  FANS: 'Fans',
  NEWS: 'News',
  VIEW_ALL: 'View All'
};

export const SETTINGS_LIST_TITLE = {
  PERSONAL_ACCOUNT: 'PersonalAccount',
  CONFIDENTIALITY: 'Confidentiality',
  LANGUAGE: 'Language',
  TERMS_AND_POLICY: 'TermsAndPolicy',
  HELP: 'Help',
  OUT: 'Out',
  EDIT_PROFILE: 'EditProfile'
};

export const CONFIDENTIALITY_TITLE = {
  VISIBILITY: 'Profile Visibility',
  DATA_SHARING: 'Data Sharing',
  AD_PREFERENCES: 'Ad Preferences',
};

export const CONFIDENTIALITY_CHECKED = {
  PUBLIC: 'Public',
  DATA_SHARING: 'Allow Data Sharing',
  AD_PREFERENCES: 'EnablePersonalizedAds',
};

export const CONFIDENTIALITY_SETTINGS = {
  PUBLIC: 'Public',
  CONFIDENTIALITY_desc: 'Choose Who Can See Your Profile And Activity',
  FRIENDS_ONLY: 'FriendsOnly',
  FRIENDS_value: 'Friends',
  PRIVATE: 'Private',
  DATA_SHARING: 'Allow Data Sharing',
  DISABLE_DATA_SHARING: 'Disable Data Sharing',
  DATA_SHARING_desc: 'Control How Your Data Is Shared With Third Party Services',
  AD_PREFERENCES: 'Enable Personalized Ads',
  DISABLE_AD_PREFERENCES: 'Disable Personalized Ads',
  AD_PREFERENCES_desc: 'Manage Ad Personalization Based On Your Activity',
};

export const LANGUAGES_TITLE = {
  ENGLISH: 'English',
  RUSSIAN: 'Russian',
  CODE_EN: 'en',
  CODE_RU: 'ru',
};

export const TERMS_TITLE = {
  ACCOUNT_RESPONSIBILITY: 'Account Responsibility',
  RESPECTFUL_BEHAVIOR: 'Respectful Behavior',
  LEGAL_USE_ONLY: 'Legal Use Only',
  NO_SPAM: 'No Spam Or Bots',
  INTELLECTUAL_PROPERTY: 'Intellectual Property',
  CONTENT_GUIDELINES: 'Content Guidelines',
  REPORTING_VIOLATIONS: 'Reporting Violations',
  COMPLIANCE_WITH_UPDATES: 'Compliance With Updates',
  CONSEQUENCES_OF_VIOLATIONS: 'Consequences Of Violations',
  AGE_REQUIREMENT: 'Age Requirement'
};

export const LOG_TITLE = {
  SETTINGS: 'Settings',
  LOG_IN: 'LogIn',
};

export const LOG_URL = {
  SETTINGS: '/settings',
  LOG_IN: '/logIn',
};

export const generateKey = (term, index) => `${term.replace(/\s+/g, '')}_desc_${index}`;

