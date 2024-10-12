import avatars from "./Avatars-src";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

// Константы
const CURRENT_USER_NAME = "Ilona Sue"
const baseMessageUrl = '/messages/';

// Счетчики
let postIdCounter = 1;
let commentBlockIdCounter = 1;
let commentIdCounter = 1;
let userIdCounter = 1;
let chatIdCounter = 1;
let messageIdCounter = 1;

// Начальное состояние
let store = {
  _state: {
    profilePage: {
      posts: [
        {
          name: CURRENT_USER_NAME, id: postIdCounter++, message: 'Who is your favourite character in Naruto?',
          comments: 1, likes: 123, time: '10:00', likedByUser: false, commentData: []
        },
        {
          name: CURRENT_USER_NAME, id: postIdCounter++, message: 'Where are you from',
          comments: 1, likes: 14, time: '09:00', likedByUser: false, commentData: []
        },
        {
          name: CURRENT_USER_NAME, id: postIdCounter++, message: 'I wish i had more free time to watch anime!',
          comments: 1, likes: 36, time: '08:00', likedByUser: false, commentData: []
        },
        {
          name: CURRENT_USER_NAME, id: postIdCounter++, message: 'Have you seen the JK?',
          comments: 1, likes: 13, time: '07:00', likedByUser: false, commentData: []
        },
        {
          name: CURRENT_USER_NAME, id: postIdCounter++, message: 'Hello everyone!',
          comments: 1, likes: 3, time: '06:00', likedByUser: false, commentData: []
        },
      ],
      comments: [
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{
              commentId: commentIdCounter++,
              message: 'Wow!Amazing!',
              user: 'Mark',
              time: '13:00',
              avatar: `${avatars.markPic}`
            }],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{
              commentId: commentIdCounter++,
              message: 'Nice!',
              user: 'Vikky',
              time: '13:30',
              avatar: `${avatars.vikkyPic}`
            }],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{
              commentId: commentIdCounter++,
              message: 'Amazing!',
              user: 'Sunny',
              time: '14:30',
              avatar: `${avatars.sunnyPic}`
            }],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{
              commentId: commentIdCounter++,
              message: 'Great!',
              user: 'Ino',
              time: '16:30',
              avatar: `${avatars.inoPic}`
            }],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{
              commentId: commentIdCounter++,
              message: 'Hi!',
              user: 'Sakura',
              time: '17:30',
              avatar: `${avatars.sakuraPic}`
            }],
          newCommentText: '',
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      users: [
        {name: 'Mark', id: userIdCounter++, url: `${baseMessageUrl}1`, avatar: `${avatars.markPic}`},
        {name: 'Vikky', id: userIdCounter++, url: `${baseMessageUrl}2`, avatar: `${avatars.vikkyPic}`},
        {name: 'Sunny', id: userIdCounter++, url: `${baseMessageUrl}3`, avatar: `${avatars.sunnyPic}`},
        {name: 'Phillip', id: userIdCounter++, url: `${baseMessageUrl}/4`, avatar: `${avatars.phillipPic}`},
        {name: 'Elon', id: userIdCounter++, url: `${baseMessageUrl}5`, avatar: `${avatars.elonPic}`},
        {name: 'Sakura', id: userIdCounter++, url: `${baseMessageUrl}6`, avatar: `${avatars.sakuraPic}`},
        {name: 'Ino', id: userIdCounter++, url: `${baseMessageUrl}7`, avatar: `${avatars.inoPic}`},
      ],
      chats: [
        {
          id: chatIdCounter++,
          participants: ['Mark', 'Ilona Sue'],
          messages: [
            {name: 'Mark', message: 'Hello there!', id: messageIdCounter++, time: '17:28', avatar: avatars.markPic},
            {name: 'Ilona Sue', message: 'Hi', id: messageIdCounter++, time: '17:50', avatar: avatars.ilonaSue},
            {
              name: 'Mark',
              message: 'Have you seen Jujutsu K?',
              id: messageIdCounter++,
              time: '19:00',
              avatar: avatars.markPic
            },
            {name: 'Ilona Sue', message: 'Yeah', id: messageIdCounter++, time: '19:10', avatar: avatars.ilonaSue},
            {name: 'Mark', message: 'How old are you?', id: messageIdCounter++, time: '20:00', avatar: avatars.markPic},
            {name: 'Mark', message: 'Can I call u?', id: messageIdCounter++, time: '20:10', avatar: avatars.markPic},
            {
              name: 'Mark', message: 'Where are u?', id: messageIdCounter++, time: '22:00', avatar: avatars.markPic
            }
          ]
        },
      ],
      newMessageText: '',
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}

//Привязка комментариев к постам
store._state.profilePage.posts.forEach(post => {
  post.commentData = store._state.profilePage.comments.filter(comment => comment.id === post.id);
});

export default store
window.store = store
