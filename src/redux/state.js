import avatars from "./Avatars-src";

const CURRENT_USER_NAME = "Ilona Sue"
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const HANDLE_LIKE = "HANDLE-LIKE";
const TOGGLE_COMMENTS = 'TOGGLE_COMMENTS';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const OPEN_DIALOG = 'OPEN_DIALOG';

let postIdCounter = 1;
let commentIdCounter = 1;
let userIdCounter = 1;
let chatIdCounter = 1;
let messageIdCounter = 1;


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: postIdCounter++, message:'Who is your favourite character in Naruto?',
          comments: 1, likes: 123, likedByUser: false, commentData: []},
        {id: postIdCounter++, message:'Where are you from',
          comments: 1, likes: 14, likedByUser: false, commentData: []},
        {id: postIdCounter++, message:'I wish i had more free time to watch anime!',
          comments: 1, likes: 36, likedByUser: false, commentData: []},
        {id: postIdCounter++, message:'Have you seen the JK?',
          comments: 1, likes: 13, likedByUser: false, commentData: []},
        {id: postIdCounter++, message:'Hello everyone!',
          comments: 1, likes: 3, likedByUser: false, commentData: []},
      ],
      comments: [
        {id: commentIdCounter++, commentsVisibility: false, messages:
            [{message1: 'Wow!Amazing!', user: 'user1'}],
        },
        {id: commentIdCounter++, commentsVisibility: false, messages:
            [{message1: 'Nice!', user: 'user2'}],
        },
        {id: commentIdCounter++, commentsVisibility: false, messages:
           [{message1: 'Amazing!', user: 'user1'}],
        },
        {id: commentIdCounter++, commentsVisibility: false, messages:
            [{message1: 'Great!', user: 'user3'}],
        },
        {id: commentIdCounter++, commentsVisibility: false, messages:
            [{message1: 'Hi!', user: 'user2'}],
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      users: [
        {name: 'Mark', id: userIdCounter++, url: `/messages/1`, avatar: `${avatars.markPic}`},
        {name: 'Vikky', id: userIdCounter++, url: `/messages/2`, avatar: `${avatars.vikkyPic}`},
        {name: 'Sunny', id: userIdCounter++, url: `/messages/3`, avatar: `${avatars.sunnyPic}`},
        {name: 'Phillip', id: userIdCounter++, url: `/messages/4`, avatar: `${avatars.phillipPic}`},
        {name: 'Elon', id: userIdCounter++, url: `/messages/5`, avatar: `${avatars.elonPic}`},
        {name: 'Sakura', id: userIdCounter++, url: `/messages/6`, avatar: `${avatars.sakuraPic}`},
        {name: 'Ino', id: userIdCounter++, url: `/messages/7`, avatar: `${avatars.inoPic}`},
      ],
      chats: [
        {
          id: chatIdCounter++,
          participants: ['Mark', 'Ilona Sue'],
          messages: [
            { name: 'Mark', message: 'Hello there!', id: messageIdCounter++, time: '17:28', avatar: avatars.markPic },
            { name: 'Ilona Sue', message: 'Hi', id: messageIdCounter++, time: '17:50', avatar: avatars.ilonaSue },
            { name: 'Mark', message: 'Have you seen the last episode of Jujutsu K?', id: messageIdCounter++, time: '19:00', avatar: avatars.markPic },
            { name: 'Ilona Sue', message: 'Yeah', id: messageIdCounter++, time: '19:10', avatar: avatars.ilonaSue },
            { name: 'Mark', message: 'How old are you?', id: messageIdCounter++, time: '20:00', avatar: avatars.markPic },
            { name: 'Mark', message: 'Can I call u?', id: messageIdCounter++, time: '20:10', avatar: avatars.markPic },
            { name: 'Mark', message: 'Where are u? Are u still here?', id: messageIdCounter++, time: '22:00', avatar: avatars.markPic }
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
    if (action.type === ADD_POST) {
      if (this._state.profilePage.newPostText.trim() !== '') {
        let newPostId = this._state.profilePage.posts.length + 1;
        let newPost = {
          id: newPostId,
          message: this._state.profilePage.newPostText,
          comments: 0,
          likes: 0,
          likedByUser: false,
          commentData: [],
        }
        let comments = {
          id: this._state.profilePage.comments.length + 1,
          commentsVisibility: false,
          messages: [],
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.comments.push(comments);

        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
      }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.value
      this._callSubscriber(this._state)
    } else if (action.type === HANDLE_LIKE) {
      let post = this._state.profilePage.posts.find(post => post.id === action.id);

      if (!post) {
        console.error(`Post with id ${action.id} not found.`);
        return;
      }
      if (post.likedByUser) {
        post.likes = parseInt(post.likes) - 1;
        post.likedByUser = false;
      } else {
        post.likes = parseInt(post.likes) + 1;
        post.likedByUser = true;
      }
      this._callSubscriber(this._state);
    }
    else if (action.type === TOGGLE_COMMENTS) {
      const comments = this._state.profilePage.comments.find(c => c.id === action.id);
      if (comments) {
        comments.commentsVisibility = !comments.commentsVisibility;
        this._callSubscriber(this._state);
      } else {
        console.error(`Comments for post ID ${action.id} not found.`);
      }
    }
    else if (action.type === SEND_MESSAGE) {
      const chat = this._state.dialogsPage.chats.find(chat => chat.id === action.chatId);
      if (!chat) {
        console.error(`Chat with id ${action.chatId} not found.`);
        return;
      }

      if (this._state.dialogsPage.newMessageText.trim() !== '') {
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        let newMessageId = messageIdCounter++;
        let newMessage = {
          name: CURRENT_USER_NAME,
          id: newMessageId,
          time: `${hours}:${minutes}`,
          avatar: avatars.ilonaSue ,
          message: this._state.dialogsPage.newMessageText,
         }

        chat.messages.push(newMessage);

        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
      }
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.value;
      this._callSubscriber(this._state)
    }
  }
}

// Привязка комментариев к постам
store._state.profilePage.posts.forEach(post => {
  post.commentData = store._state.profilePage.comments.filter(comment => comment.id === post.id);
});

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newPostText) => {
  return {type: UPDATE_NEW_POST_TEXT, value: newPostText}
}

export const handleLikeActionCreator = (id) => ({
   type: HANDLE_LIKE,
   id: id,
})

export const toggleCommentsActionCreator = (id) => ({
  type: TOGGLE_COMMENTS,
  id: id,
});

export const sendMessageActionCreator = (chatId) => ({
  type: SEND_MESSAGE,
  chatId: chatId,
});
export const updateNewMessageTextActionCreator = (newMessageText) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, value: newMessageText}
};

export const openDialogActionCreator = (id) => ({
  type: OPEN_DIALOG,
  id: id,
});

export default store
window.store = store
