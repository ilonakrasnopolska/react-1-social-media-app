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
        let animeIdCounter = 1;
        // Извлекаем только нужные ключи
        const filteredData = data.data.map((anime) => ({
          id: anime.mal_id,
          name: anime.title_english,
          trailer: anime.trailer.url,
          description: anime.synopsis,
          episodes: anime.episodes,
          cover: anime.images.jpg.image_url,
          genres: anime.genres,
          year: anime.year,
          score: anime.score,
          toWatchUrl: `${baseAnimeUrl}${animeIdCounter++}`
        }));
        console.log("Отфильтрованные данные:", filteredData);
        dispatch(setAnimeList(filteredData)); // Отправляем полученные данные в редюсер
    }})
    .catch((error) => {
      console.error('Failed to fetch anime:', error);
    });
};
