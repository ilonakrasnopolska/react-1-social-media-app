import avatars from "./Avatars-src";

let state = {
  profilePage: {
    posts: [
      {id: 1, message:'Who is your favourite character in Naruto?', comments:'22', likes:'123'},
      {id: 2, message:'Where are you from', comments:'22', likes:'14'},
      {id: 3, message:'I wish i had more free time to watch anime!', comments:'2', likes:'36'},
      {id: 4, message:'Have you seen the Jujutsu Kaisen?', comments:'5', likes:'13'},
      {id: 5, message:'Hello everyone!', comments:'2', likes:'3'},
    ],
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
  sideBar: {
    friends: [
      {name: 'Sunny', id: 1, avatar: `${avatars.sunnyPic}`},
      {name: 'Phillip', id: 2, avatar: `${avatars.phillipPic}`},
      {name: 'Elon', id: 3, avatar: `${avatars.elonPic}`},
    ]
  }
}

export default state
