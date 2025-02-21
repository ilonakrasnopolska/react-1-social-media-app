import fetchData from './fetchData';
import { setAnimeList } from '../redux/AnimeReducer/anime-reducer';
import { startLoading, stopLoading } from '../redux/SpinnerReducer/spinner-reducer';
import avatars from "../assets/Avatars-src";

const baseAnimeUrl = '/anime/';

export const fetchAnime = (filteredList) => (dispatch) => {
  if (filteredList != undefined && filteredList.length > 0) {
    return;
  }
  dispatch(startLoading())
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
            trailer: formattedTrailerUrl,
            description: anime.synopsis,
            episodes: anime.episodes,
            cover: anime.images?.jpg?.image_url || avatars.defaultPic,
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
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};
