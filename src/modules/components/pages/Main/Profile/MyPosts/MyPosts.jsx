import React from "react";
import Classes from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = ({posts, t}) => {
  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          {posts.map(post => (
            <Post key={post.postId} post={post} t={t}/>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MyPosts;
