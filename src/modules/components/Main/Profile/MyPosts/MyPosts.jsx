import React from "react";
import {useSelector} from "react-redux";
import Classes from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = () => {
  const posts = useSelector(state => state.profile.posts);
  const postsElements = posts.map(post => (
    <Post key={post.postId} postId={post.postId} />
  ));
  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          {postsElements}
        </ul>
      </div>
    </section>
  );
}

export default MyPosts;
