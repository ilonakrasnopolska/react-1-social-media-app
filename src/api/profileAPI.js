import fetchData from "./fetchData";
import { v4 as uuidv4 } from 'uuid';
import { startLoading, stopLoading } from '../redux/SpinnerReducer/spinner-reducer';
import { setPostsList, setProfileData } from "../redux/ProfileReducer/profile-reducer";
import { setProfileDataEdit } from "../redux/SettingsReducer/settings-reducer";
import avatars from "../assets/Avatars-src";
import {CURRENT_USER_NAME} from "../constants/constants"


//ЗАГЛУШКИ
const texts = [`Who is your favourite character in Naruto?`,
`Where are you from?`, `Hello everyone!`,
`I wish i had more free time to watch anime!`,
`Have you seen the JK?`];
const comments = ['Wow!Amazing!','Nice!', `Hello everyone!`,
'Amazing!',`Have you seen the JK?`, 'Great!', 'Hi!'];
const likes = [120, 14, 2, 1, 3, 5, 10, 20, 23, 27];
const times = ['10:00', '11:00', '14:00', '19:00'];

// Тут должен быть запрос на сервер, но пока заглушка
export const fetchPosts = (posts) => (dispatch) => {
  if (posts && Object.keys(posts).length > 0) return;
    dispatch(startLoading())
    fetchData('https://social-network.samuraijs.com/api/1.0/users')
    .then((data) => {
      if (data && data.items) {
        const postsArr = data.items.map((item) => {
          //заглушки
          const randomPost = texts[Math.floor(Math.random() * texts.length)];
          const randomAmountOfLike = likes[Math.floor(Math.random() * likes.length)];
          const randomTime = times[Math.floor(Math.random() * times.length)];
          const randomComment = comments[Math.floor(Math.random() * comments.length)];
          return {
            name: CURRENT_USER_NAME,
            postId: uuidv4(),
            message: randomPost,
            comments: 1,
            likes: randomAmountOfLike,
            time: randomTime,
            likedByUser: false,
            avatar: avatars.ilonaSue,
            newCommentText: '',
            commentData: {
              commentsVisibility: false,
              messages: [{
            commentId: uuidv4(),
            message: randomComment,
            user: item.name,
            userId: item.id,
            time: randomTime,
            avatar: item.photos?.small || avatars.defaultPic
          }],
            }
          };
        });
        dispatch(setPostsList(postsArr));
      }
    })
    .catch((error) => {
      console.error('Failed to fetch posts:', error);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
  };

// Тут должен быть запрос на сервер, но пока заглушка
  export const fetchProfileData = (userInfo) => (dispatch) => {
    if (userInfo && Object.keys(userInfo).length > 0) return;
     dispatch(startLoading())
    fetchData('https://social-network.samuraijs.com/api/1.0/users')
    .then((data) => {
      if (data && data.items) {
        const personalAccount = {
            avatar: avatars.ilonaSue,
            name: "Ilona Sue",
            dateOfBirth: "1997-10-12",
            city: "New York",
            gender: "Female",
            favoriteAnime: "Naruto",
        };
        dispatch(setProfileData(personalAccount));
        dispatch(setProfileDataEdit(personalAccount));
      }
    })
    .catch((error) => {
      console.error('Failed to fetch posts:', error);
    })
    .finally(() => {
      dispatch(stopLoading());
    });
  };

