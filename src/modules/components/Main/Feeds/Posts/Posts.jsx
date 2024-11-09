import React from "react";
import Classes from './Posts.module.css'
import Post from "./Post/Post";
import {useSelector} from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.feeds.feeds);
  const postsElements = posts.map(post => (
    <Post key={post.feedId} feedId={post.feedId} />
  ));
  return (
    <div className={Classes.feeds}>
    <ul className={Classes.list}>
      {postsElements}
    </ul>
    </div>
  )
}

export default Posts;
