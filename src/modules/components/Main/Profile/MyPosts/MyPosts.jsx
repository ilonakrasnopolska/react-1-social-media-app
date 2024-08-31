import React from "react";
import Classes from "./MyPosts.module.css"
import Post from "./Post/Post"
import postsData from "../../../../helpers/PostsData";

const MyPosts = () => {
  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          <Post message={postsData[0].message} comments={postsData[0].comments} likes={postsData[0].likes} />
          <Post message={postsData[1].message} comments={postsData[1].comments} likes={postsData[1].likes} />
          <Post message={postsData[2].message} comments={postsData[2].comments} likes={postsData[2].likes} />
          <Post message={postsData[3].message} comments={postsData[3].comments} likes={postsData[3].likes} />
          <Post message={postsData[4].message} comments={postsData[4].comments} likes={postsData[4].likes} />
        </ul>
      </div>
    </section>
  );
}

export default MyPosts;
