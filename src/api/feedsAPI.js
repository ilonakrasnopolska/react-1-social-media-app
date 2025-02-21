import fetchData from './fetchData';
import { startLoading, stopLoading } from '../redux/SpinnerReducer/spinner-reducer';
import { setFeedsList } from '../redux/FeedsReducer/feeds-reducer';
import avatars from "../assets/Avatars-src";

//Заглушки
const categories = ['Fans', 'Trends', 'Manga', 'News'];
const times = ['13:34', '12:24', '12:04', '11:54'];
const contents = [`Have someone seen a new episode of Naruto?`,
`A new chapter of My Hero Academia manga is coming out tomorrow!`,
`Did you hear about the Naruto cafe opening?`,
`A new chapter of Jujutsu K manga is coming out tomorrow!`];


export const fetchFeeds = (posts) => (dispatch) => {
  if (posts != undefined && posts.length > 0) {
    return;
  }
  dispatch(startLoading())
  fetchData('https://api.jikan.moe/v4/top/anime', {
    limit: 10,
    sort: 'bypopularity'
  })
    .then((data) => {
      if (data && data.data) {
        const feedsArr = data.data.map((post) => {
           // Случайным образом выбираем из списка
           const randomCategory = categories[Math.floor(Math.random() * categories.length)];
           const randomTime = times[Math.floor(Math.random() * times.length)];
           const randomContent = contents[Math.floor(Math.random() * contents.length)];
           return {
            feedId: post.mal_id,
            name: post.title,
            avatar: post.images?.jpg?.image_url || avatars.defaultPic,
            category: randomCategory,
            time: randomTime,
            content: randomContent
          };
        });
        dispatch(setFeedsList(feedsArr));
      }
    }
    )
    .catch((error) => {
      console.error('Failed to fetch random posts:', error);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};
