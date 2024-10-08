import avatars from "./Avatars-src";
import comments from "../modules/components/Main/Profile/MyPosts/Post/Comments/Comments";

// Константы
const CURRENT_USER_NAME = "Ilona Sue"
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const HANDLE_LIKE = "HANDLE-LIKE";
const TOGGLE_COMMENTS = 'TOGGLE_COMMENTS';
const UPDATE_NEW_COMMENT_TEXT = "UPDATE-NEW-COMMENT-TEXT";
const ADD_COMMENT = "ADD-COMMENT";
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const OPEN_DIALOG = 'OPEN_DIALOG';
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
            [{commentId: commentIdCounter++, message1: 'Wow!Amazing!', user: 'user1', time: '13:00'}],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{commentId: commentIdCounter++, message1: 'Nice!', user: 'user2', time: '13:30'}],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{commentId: commentIdCounter++, message1: 'Amazing!', user: 'user1', time: '14:30'}],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{commentId: commentIdCounter++, message1: 'Great!', user: 'user3', time: '16:30'}],
          newCommentText: '',
        },
        {
          id: commentBlockIdCounter++, commentsVisibility: false, messages:
            [{commentId: commentIdCounter++, message1: 'Hi!', user: 'user2', time: '17:30'}],
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
  _findById(array, id) {
    return array.find(item => item.id === id);
  },
  _getData() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`
  },
  _addPost() {
    if (this._state.profilePage.newPostText.trim() !== '') {
      let newPostId = postIdCounter++;
      let newCommentId = commentBlockIdCounter++;
      let newPost = {
        name: CURRENT_USER_NAME,
        id: newPostId,
        message: this._state.profilePage.newPostText,
        comments: 0,
        likes: 0,
        time: this._getData(),
        likedByUser: false,
        commentData: [],
      }
      let comments = {
        id: newCommentId,
        commentsVisibility: false,
        messages: [],
      }

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.comments.push(comments);

      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    }
  },
  _addComment(commentsId) {
    const commentGroup = this._findById(this._state.profilePage.comments, commentsId);
    if (!commentGroup) {
      console.error(`Comments group with id ${commentsId} not found.`);
      return;
    }

    const newCommentText = commentGroup.newCommentText;
    if (newCommentText.trim() === '') return;

    const newComment = {
      commentId: commentIdCounter++,
      message1: newCommentText,
      user: CURRENT_USER_NAME,
      time: this._getData(),
    };

    commentGroup.messages.push(newComment);
    commentGroup.newCommentText = '';
    this._callSubscriber(this._state);
  },
  _handleLike(action) {
    const post = this._findById(this._state.profilePage.posts, action.id);
    if (!post) {
      console.error(`Post with id ${action.id} not found.`);
      return;
    }
    post.likedByUser ? post.likes-- : post.likes++;
    post.likedByUser = !post.likedByUser;
    this._callSubscriber(this._state);
  },
  _updateText(state, property, action) {
    state[property] = action.value;
    this._callSubscriber(this._state);
  },
  _sendMessage(action) {
    const chat = this._findById(this._state.dialogsPage.chats, action.chatId);
    if (!chat) {
      console.error(`Chat with id ${action.chatId} not found.`);
      return;
    }

    if (this._state.dialogsPage.newMessageText.trim() !== '') {
      let newMessageId = messageIdCounter++;
      let newMessage = {
        name: CURRENT_USER_NAME,
        id: newMessageId,
        time: this._getData(),
        avatar: avatars.ilonaSue,
        message: this._state.dialogsPage.newMessageText,
      };

      chat.messages.push(newMessage);

      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
  },
  _updatePropertyById(array, id, property, value) {
    const item = this._findById(array, id);
    if (item) {
      item[property] = value;
      this._callSubscriber(this._state);
    } else {
      console.error(`Item with id ${id} not found.`);
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost()
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateText(this._state.profilePage, 'newPostText', action)
    } else if (action.type === HANDLE_LIKE) {
      this._handleLike(action);
    } else if (action.type === TOGGLE_COMMENTS) {
      this._updatePropertyById(this._state.profilePage.comments,
        action.id,
        'commentsVisibility', !this._state.profilePage.comments.find(c => c.id === action.id).commentsVisibility,);
    } else if (action.type === UPDATE_NEW_COMMENT_TEXT) {
      this._updatePropertyById(this._state.profilePage.comments,
        action.commentsId, 'newCommentText', action.value);
    } else if (action.type === ADD_COMMENT) {
      this._addComment(action.commentsId);
    } else if (action.type === SEND_MESSAGE) {
      this._sendMessage(action);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateText(this._state.dialogsPage, 'newMessageText', action)
    }
  }
}

//Привязка комментариев к постам
store._state.profilePage.posts.forEach(post => {
  post.commentData = store._state.profilePage.comments.filter(comment => comment.id === post.id);
});

//Экспортируемые функции
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, value: newPostText});
export const handleLikeActionCreator = (id) => ({type: HANDLE_LIKE, id: id});
export const toggleCommentsActionCreator = (id) => ({type: TOGGLE_COMMENTS, id: id});
export const updateNewCommentTextActionCreator = (commentsId, newCommentText) => ({
  type: UPDATE_NEW_COMMENT_TEXT,
  commentsId: commentsId,
  value: newCommentText
});
export const addCommentActionCreator = (commentsId) => ({type: ADD_COMMENT, commentsId: commentsId,});
export const sendMessageActionCreator = (chatId) => ({type: SEND_MESSAGE, chatId: chatId});
export const updateNewMessageTextActionCreator = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value: newMessageText
});
export const openDialogActionCreator = (id) => ({type: OPEN_DIALOG, id: id});

export default store
window.store = store
