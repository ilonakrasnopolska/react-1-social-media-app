import avatars from "./Avatars-src";
import profileReducer from "./ProfileReducer/profile-reducer";
import dialogsReducer from "./DialogsReducer/dialogs-reducer";
import sidebarReducer from "./SidebarReducer/sidebar-reducer";

// Константы
const CURRENT_USER_NAME = "Ilona Sue"
const baseMessageUrl = '/messages/';

// Счетчики
let postIdCounter = 1;
let commentIdCounter = 1;
let userIdCounter = 1;
let chatIdCounter = 1;
let messageIdCounter = 1;

// Начальное состояние
let myOwnStore = {
  _state: {
    profilePage: {
      posts: [
        {
          name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Who is your favourite character in Naruto?',
          comments: 1, likes: 123, time: '10:00', likedByUser: false, commentData: {
            commentsVisibility: false, messages:
              [{
                commentId: commentIdCounter++,
                message: 'Wow!Amazing!',
                user: 'Mark',
                time: '13:00',
                avatar: `${avatars.markPic}`
              }],
          }, newCommentText: '',

        },
        {
          name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Where are you from',
          comments: 1, likes: 14, time: '09:00', likedByUser: false, commentData: {
            commentsVisibility: false, messages:
              [{
                commentId: commentIdCounter++,
                message: 'Nice!',
                user: 'Vikky',
                time: '13:30',
                avatar: `${avatars.vikkyPic}`
              }],
          }, newCommentText: '',
        },
        {
          name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'I wish i had more free time to watch anime!',
          comments: 1, likes: 36, time: '08:00', likedByUser: false, commentData:  {
            commentsVisibility: false, messages:
              [{
                commentId: commentIdCounter++,
                message: 'Amazing!',
                user: 'Sunny',
                time: '14:30',
                avatar: `${avatars.sunnyPic}`
              }],
          }, newCommentText: '',
        },
        {
          name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Have you seen the JK?',
          comments: 1, likes: 13, time: '07:00', likedByUser: false, commentData: {
            commentsVisibility: false, messages:
              [{
                commentId: commentIdCounter++,
                message: 'Great!',
                user: 'Ino',
                time: '16:30',
                avatar: `${avatars.inoPic}`
              }],
          }, newCommentText: '',
        },
        {
          name: CURRENT_USER_NAME, postId: postIdCounter++, message: 'Hello everyone!',
          comments: 1, likes: 3, time: '06:00', likedByUser: false, commentData:  {
            commentsVisibility: false, messages:
              [{
                commentId: commentIdCounter++,
                message: 'Hi!',
                user: 'Sakura',
                time: '17:30',
                avatar: `${avatars.sakuraPic}`
              }],
          }, newCommentText: '',
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      users: [
        {name: 'Mark', userId: userIdCounter++, url: `${baseMessageUrl}1`, avatar: `${avatars.markPic}`},
        {name: 'Vikky', userId: userIdCounter++, url: `${baseMessageUrl}2`, avatar: `${avatars.vikkyPic}`},
        {name: 'Sunny', userId: userIdCounter++, url: `${baseMessageUrl}3`, avatar: `${avatars.sunnyPic}`},
        {name: 'Phillip', userId: userIdCounter++, url: `${baseMessageUrl}/4`, avatar: `${avatars.phillipPic}`},
        {name: 'Elon', userId: userIdCounter++, url: `${baseMessageUrl}5`, avatar: `${avatars.elonPic}`},
        {name: 'Sakura', userId: userIdCounter++, url: `${baseMessageUrl}6`, avatar: `${avatars.sakuraPic}`},
        {name: 'Ino', userId: userIdCounter++, url: `${baseMessageUrl}7`, avatar: `${avatars.inoPic}`},
      ],
      chats: [
        {
          chatId: chatIdCounter++,
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
        {name: 'Sunny', friendId: 1, avatar: `${avatars.sunnyPic}`},
        {name: 'Phillip', friendId: 2, avatar: `${avatars.phillipPic}`},
        {name: 'Elon', friendId: 3, avatar: `${avatars.elonPic}`},
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
    this._state.sideBar = sidebarReducer(this._state.sideBar, action)
    this._callSubscriber(this._state)
  }
}


export default myOwnStore
window.store = myOwnStore