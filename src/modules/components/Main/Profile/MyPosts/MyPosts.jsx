import React from "react";
import Classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </ul>
      </div>
    </section>
  );
}

export default MyPosts;
