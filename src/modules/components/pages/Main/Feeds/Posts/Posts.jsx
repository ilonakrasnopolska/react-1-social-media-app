import React from "react";
import Classes from './Posts.module.css'
import Post from "./Post/Post";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { fetchFeeds } from "../../../../../../api/feedsAPI";
import { ClipLoader } from "react-spinners";

const Posts = ({isLoading, posts, t}) => {
  useFetchAndDispatch(() => fetchFeeds(posts));
  return (
    <div className={Classes.feeds}>
    {isLoading ? (
      <div className={Classes.spinner}>
        <ClipLoader color="#194770" size={50} />
      </div>
    ) : posts.length > 0 ? (
      <ul className={Classes.list}>
        {posts.map((post) => (
          <Post key={post.feedId} post={post} t={t} />
        ))}
      </ul>
    ) : (
      <div className={Classes.noResults}>{t("Empty")}</div>
    )}
  </div>
);
};

export default Posts;
