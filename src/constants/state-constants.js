// Список наименований для навигации по основным разделам
export const NAV_LIST_NAME = {
  PROFILE: 'Profile',  // Профиль
  MESSAGES: 'Messages', // Сообщения
  FEEDS: 'Feeds', // Лента
  ANIME: 'Anime', // Аниме
  SETTINGS: 'Settings', // Настройки
  FIND_FRIENDS: 'FindFriends' // Найти друзей
};

// Список URL для навигации по разделам
export const NAV_LIST_URL = {
  PROFILE: '/profile', // URL для профиля
  MESSAGES: '/messages', // URL для сообщений
  FEEDS: '/feeds', // URL для ленты
  ANIME: '/anime', // URL для аниме
  SETTINGS: '/settings', // URL для настроек
  FIND_FRIENDS: '/find_friends' // URL для поиска друзей
};

// Заголовки для раздела ленты
export const FEEDS_LIST_TITLE = {
  TRENDS: 'Trends', // Тренды
  MANGA: 'Manga', // Манга
  FANS: 'Fans', // Фанаты
  NEWS: 'News', // Новости
  VIEW_ALL: 'View All' // Смотреть все
};

// Заголовки для раздела настроек
export const SETTINGS_LIST_TITLE = {
  PERSONAL_ACCOUNT: 'PersonalAccount', // Личный аккаунт
  CONFIDENTIALITY: 'Confidentiality', // Конфиденциальность
  LANGUAGE: 'Language', // Язык
  TERMS_AND_POLICY: 'TermsAndPolicy', // Условия и политика
  HELP: 'Help', // Помощь
  OUT: 'Out', // Выйти
  EDIT_PROFILE: 'EditProfile' // Редактировать профиль
};

// Заголовки для раздела конфиденциальности
export const CONFIDENTIALITY_TITLE = {
  VISIBILITY: 'Profile Visibility', // Видимость профиля
  DATA_SHARING: 'Data Sharing', // Обмен данными
  AD_PREFERENCES: 'Ad Preferences', // Настройки рекламы
};

// Константы для выбранных настроек конфиденциальности
export const CONFIDENTIALITY_CHECKED = {
  PUBLIC: 'Public', // Публичный профиль
  DATA_SHARING: 'Allow Data Sharing', // Разрешить обмен данными
  AD_PREFERENCES: 'EnablePersonalizedAds', // Включить персонализированную рекламу
};

// Подробности настроек конфиденциальности
export const CONFIDENTIALITY_SETTINGS = {
  PUBLIC: 'Public', // Публичный
  CONFIDENTIALITY_desc: 'Choose Who Can See Your Profile And Activity', // Описание для выбора, кто может видеть профиль и активность
  FRIENDS_ONLY: 'FriendsOnly', // Только друзья
  FRIENDS_value: 'Friends', // Значение для друзей
  PRIVATE: 'Private', // Приватный
  DATA_SHARING: 'Allow Data Sharing', // Разрешить обмен данными
  DISABLE_DATA_SHARING: 'Disable Data Sharing', // Отключить обмен данными
  DATA_SHARING_desc: 'Control How Your Data Is Shared With Third Party Services', // Описание для управления обменом данными с третьими сторонами
  AD_PREFERENCES: 'Enable Personalized Ads', // Включить персонализированную рекламу
  DISABLE_AD_PREFERENCES: 'Disable Personalized Ads', // Отключить персонализированную рекламу
  AD_PREFERENCES_desc: 'Manage Ad Personalization Based On Your Activity', // Описание для управления персонализированной рекламой
};

// Доступные языки для настроек
export const LANGUAGES_TITLE = {
  ENGLISH: 'English', // Английский
  RUSSIAN: 'Russian', // Русский
  CODE_EN: 'en', // Код языка для английского
  CODE_RU: 'ru', // Код языка для русского
};

// Заголовки для условий использования
export const TERMS_TITLE = {
  ACCOUNT_RESPONSIBILITY: 'Account Responsibility', // Ответственность за аккаунт
  RESPECTFUL_BEHAVIOR: 'Respectful Behavior', // Уважительное поведение
  LEGAL_USE_ONLY: 'Legal Use Only', // Только законное использование
  NO_SPAM: 'No Spam Or Bots', // Нет спама и ботов
  INTELLECTUAL_PROPERTY: 'Intellectual Property', // Интеллектуальная собственность
  CONTENT_GUIDELINES: 'Content Guidelines', // Руководство по контенту
  REPORTING_VIOLATIONS: 'Reporting Violations', // Сообщение о нарушениях
  COMPLIANCE_WITH_UPDATES: 'Compliance With Updates', // Соблюдение обновлений
  CONSEQUENCES_OF_VIOLATIONS: 'Consequences Of Violations', // Последствия нарушений
  AGE_REQUIREMENT: 'Age Requirement' // Требования к возрасту
};

// Описание условий использования
export const TERMS_DESCRIPTION = {
  ACCOUNT_RESPONSIBILITY_1: "Users must provide accurate and up-to-date information when creating an account.", // Ответственность за точность данных
  ACCOUNT_RESPONSIBILITY_2: "Keep your account login details secure and do not share them with others.", // Безопасность данных аккаунта
  ACCOUNT_RESPONSIBILITY_3: "Notify us immediately if you suspect unauthorized access to your account.", // Уведомление при подозрении на несанкционированный доступ
  RESPECTFUL_BEHAVIOR_1: "Treat other users with respect and avoid harassment, bullying, or discrimination.", // Уважительное обращение с пользователями
  RESPECTFUL_BEHAVIOR_2: "Do not post or share content that is offensive, harmful, or violates the rights of others.", // Запрещено публиковать оскорбительный контент
  LEGAL_USE_ONLY_1: "Use the platform only for lawful purposes.", // Использование только для законных целей
  LEGAL_USE_ONLY_2: "Do not engage in activities that violate any laws or regulations.", // Запрещено заниматься нарушением законов
  NO_SPAM_1: "Do not use the platform to send spam, unsolicited messages, or automated scripts.", // Запрещено отправлять спам и несанкционированные сообщения
  NO_SPAM_2: "Avoid creating multiple fake accounts or manipulating the system.", // Запрещено создание фальшивых аккаунтов
  INTELLECTUAL_PROPERTY_1:  `Do not upload or share content that infringes on someone else's copyrights,` +
  `trademarks, or other rights.`, // Запрещено нарушение авторских прав
  INTELLECTUAL_PROPERTY_2:  `Respect the intellectual property of the platform and do not copy, modify,` +
  `or distribute any part of it.`, // Уважение к интеллектуальной собственности платформы
  CONTENT_GUIDELINES_1: `Ensure that any content you post complies with community standards and is appropriate for all users.`, // Соответствие контента стандартам сообщества
  CONTENT_GUIDELINES_2: `Do not share explicit or adult content , misinformation or fake news`, // Запрещено делиться неприемлемым контентом
  REPORTING_VIOLATIONS_1: `Report any suspicious or harmful behavior to our support team.`, // Сообщение о подозрительном поведении
  REPORTING_VIOLATIONS_2: `Do not misuse the reporting tools to harass or falsely accuse others.`, // Запрещено злоупотребление инструментами для жалоб
  COMPLIANCE_WITH_UPDATES_1: `Regularly review updates to the Terms and Policies and comply with the most recent rules.`, // Соблюдение последних обновлений условий
  CONSEQUENCES_OF_VIOLATIONS_1: `Understand that violations may result in warnings, temporary suspension, or permanent account termination.`, // Последствия нарушений: предупреждения и блокировки
  AGE_REQUIREMENT_1: `You must be at least [insert minimum age, e.g., 13 or 16, depending on the platform] to use the platform.`, // Требование по возрасту для использования платформы
};

// Заголовки для логирования
export const LOG_TITLE = {
  SETTINGS: 'Settings', // Настройки
  LOG_IN: 'LogIn', // Вход
};

// URL для логирования
export const LOG_URL = {
  SETTINGS: '/settings', // URL для настроек
  LOG_IN: '/logIn', // URL для входа
};
