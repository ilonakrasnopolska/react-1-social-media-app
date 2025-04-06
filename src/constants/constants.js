// Базовый URL для работы с аниме
export const baseAnimeUrl = '/anime/';

// Базовый URL для работы с сообщениями
export const baseMessageUrl = '/messages/';

// Имя текущего пользователя
export const CURRENT_USER_NAME = "Ilona Sue";

// Типы списков аниме: для просмотра, просмотренные, все аниме
export const ANIME_LIST_TYPES = {
  WATCH: 'Watch',     // Аниме, которое нужно смотреть
  WATCHED: 'Watched', // Аниме, которое уже просмотрено
  ALL: 'Anime',        // Все аниме
  SEARCH: 'Search'    //Поиск аниме
};

// Функция для генерации уникального ключа на основе термина и индекса
// Убирает пробелы из термина и добавляет индекс, чтобы создать уникальный ключ для элементов
export const generateKey = (term, index) => `${term.replace(/\s+/g, '')}_desc_${index}`;
