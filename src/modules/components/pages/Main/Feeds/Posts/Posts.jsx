import React from "react";
import Classes from './Posts.module.css'
import Post from "./Post/Post";

const Posts = ({feeds, filteredFeeds}) => {
  const posts = filteredFeeds.length > 0 ? filteredFeeds : feeds;

  return (
    <div className={Classes.feeds}>
    <ul className={Classes.list}>
      {posts.map(post => (
        <Post key={post.feedId} post={post} />
      ))}
    </ul>
    </div>
  )
}

export default Posts;
