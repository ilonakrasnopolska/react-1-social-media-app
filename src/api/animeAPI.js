import fetchData from './fetchData';
import { setAnimeList } from '../redux/AnimeReducer/anime-reducer';

const baseAnimeUrl = '/anime/';

export const fetchAnime = () => (dispatch) => {
  fetchData('https://api.jikan.moe/v4/top/anime', {
    type: 'tv',
    filter: 'bypopularity',
    limit: 25,
  })
    .then((data) => {
      if (data && data.data) {

        // Извлекаем только нужные ключи
        const animeArr = data.data.map((anime) => {
          // Обрабатываем URL трейлера
          const trailerUrl = anime.trailer?.url ? new URL(anime.trailer.url).searchParams.get("v") : null;
          const formattedTrailerUrl = trailerUrl ? `https://www.youtube.com/embed/${trailerUrl}` : null;

          return {
            id: anime.mal_id,
            name: anime.title_english,
            trailer: formattedTrailerUrl, // Сохраняем правильный URL трейлера
            description: anime.synopsis,
            episodes: anime.episodes,
            cover: anime.images.jpg.image_url,
            genres: anime.genres,
            year: anime.year,
            score: anime.score,
            toWatchUrl: `${baseAnimeUrl}${anime.mal_id}`
          };
        });
        dispatch(setAnimeList(animeArr));
    }})
    .catch((error) => {
      console.error('Failed to fetch anime:', error);
    });
};
