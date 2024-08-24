import React from "react";
import Classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          <Post message='Who is your favourite character in Naruto?' comments='22' likes='123' />
          <Post message='Where are you from?' comments='22' likes='14' />
          <Post message='I wish i had more free time to watch anime!' comments='2' likes='36' />
          <Post message='Have you seen the Jujutsu Kaisen?' comments='5' likes='13' />
          <Post message='Hello everyone!' comments='2' likes='3' />
        </ul>
      </div>
    </section>
  );
}

export default MyPosts;
