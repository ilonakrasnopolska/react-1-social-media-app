import React from "react";
import Classes from "./MyPosts.module.css"
import PostContainer from "./Post/PostContainer"


const MyPosts = ({posts, t}) => {
  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          {posts.map(post => (
            <PostContainer post={post} key={post.postId} t={t}/>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MyPosts;
