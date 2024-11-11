import React from "react";
import Classes from './Posts.module.css'
import Post from "./Post/Post";
import {useSelector} from "react-redux";

const Posts = () => {
  const feeds = useSelector((state) => state.feeds.feeds);
  const filteredFeeds = useSelector(state => state.feeds.filteredFeeds);
  const posts = filteredFeeds.length > 0 ? filteredFeeds : feeds;

  const postsElements = posts.map(post => (
    <Post key={post.feedId} post={post} />
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
