import avatars from "./Avatars-src";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const HANDLE_LIKE = "HANDLE-LIKE";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message:'Who is your favourite character in Naruto?', comments:'22', likes:'123', likedByUser: false},
        {id: 2, message:'Where are you from', comments:'22', likes:'14', likedByUser: false},
        {id: 3, message:'I wish i had more free time to watch anime!', comments:'2', likes:'36', likedByUser: false},
        {id: 4, message:'Have you seen the Jujutsu Kaisen?', comments:'5', likes:'13', likedByUser: false},
        {id: 5, message:'Hello everyone!', comments:'2', likes:'3', likedByUser: false},
      ],
      newPostText: '',
    },
    dialogsPage: {
      users: [
        {name: 'Mark', id: 1, url: `/messages/1`, avatar: `${avatars.markPic}`},
        {name: 'Vikky', id: 2, url: `/messages/2`, avatar: `${avatars.vikkyPic}`},
        {name: 'Sunny', id: 3, url: `/messages/3`, avatar: `${avatars.sunnyPic}`},
        {name: 'Phillip', id: 4, url: `/messages/4`, avatar: `${avatars.phillipPic}`},
        {name: 'Elon', id: 5, url: `/messages/5`, avatar: `${avatars.elonPic}`},
        {name: 'Sakura', id: 6, url: `/messages/6`, avatar: `${avatars.sakuraPic}`},
        {name: 'Ino', id: 7, url: `/messages/7`, avatar: `${avatars.inoPic}`},
      ],
      messages: [
        {message:'Hello there!', id: 1, data:'17:28', avatar: `${avatars.markPic}`},
        {message:'How old are you?', id: 2, data:'16:00', avatar: `${avatars.vikkyPic}`},
        {message:'Have you seen the last episode of Jujutsu K?', id: 3, data:'13:00', avatar: `${avatars.sunnyPic}`},
        {message:'Bye!', id: 4, data:'Thu', avatar: `${avatars.phillipPic}`},
        {message:'Look at at this..', id: 5, data:'Wed', avatar: `${avatars.elonPic}`},
        {message:'Can I call u?', id: 6, data:'Mon', avatar: `${avatars.sakuraPic}`},
        {message:'Where are u? Are u still here?', id: 7, data:'Mon', avatar: `${avatars.inoPic}`},
      ],
    },
    chatPage: {
      bubbles: [
        {name:'Mark', message:'Hello there!', id: 1, data:'17:28', avatar: `${avatars.markPic}`},
        {name:'Ilona Sue', message:'Hi', id: 2, data:'17:50', avatar: `${avatars.ilonaSue}`},
        {name:'Mark', message:'Have you seen the last episode of Jujutsu K?', id: 3, data:'19:00', avatar: `${avatars.markPic}`},
        {name:'Ilona Sue', message:'Yeah', id: 4, data:'19:10', avatar: `${avatars.ilonaSue}`},
        {name:'Mark', message:'How old are you?', id: 5, data:'20:00', avatar: `${avatars.markPic}`},
        {name:'Mark', message:'Can I call u?', id: 6, data:'20:10', avatar: `${avatars.markPic}`},
        {name:'Mark', message:'Where are u? Are u still here?', id: 7, data:'22:00', avatar: `${avatars.markPic}`},
      ]
    },
    sideBar: {
      friends: [
        {name: 'Sunny', id: 1, avatar: `${avatars.sunnyPic}`},
        {name: 'Phillip', id: 2, avatar: `${avatars.phillipPic}`},
        {name: 'Elon', id: 3, avatar: `${avatars.elonPic}`},
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      if (this._state.profilePage.newPostText.trim() !== '') {
        let newPost = {
          id: this._state.profilePage.posts.length + 1,
          message: this._state.profilePage.newPostText,
          comments: '0',
          likes: '0',
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
      }
    } if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.value
      this._callSubscriber(this._state)
    } if (action.type === HANDLE_LIKE) {
      // Находим пост по id
      let post = this._state.profilePage.posts.find(post => post.id === action.id);

      // Проверяем, найден ли пост
      if (!post) {
        console.error(`Post with id ${action.id} not found.`);
        return; // Если пост не найден, выходим из функции
      }
      // Если лайк уже поставлен, снимаем его
      if (post.likedByUser) {
        post.likes = parseInt(post.likes) - 1; // Уменьшаем количество лайков
        post.likedByUser = false; // Сбрасываем состояние лайка
      } else {
        // Если лайк не был поставлен, ставим его
        post.likes = parseInt(post.likes) + 1; // Увеличиваем количество лайков
        post.likedByUser = true; // Устанавливаем состояние лайка
      }
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newPostText) => {
  return {type: UPDATE_NEW_POST_TEXT, value: newPostText}
}
export const handleLikeActionCreator = (id) => {
  return {type: HANDLE_LIKE, id: id}
}

export default store
window.store = store
