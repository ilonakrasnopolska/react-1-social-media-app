import React from "react";
import Classes from "./MyPosts.module.css"
import PostContainer from "./Post/PostContainer"
import { ClipLoader } from "react-spinners";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { fetchPosts } from "../../../../../../api/profileAPI";


const MyPosts = ({posts, isLoading, t}) => {
  useFetchAndDispatch(() => fetchPosts(posts));
  return (
    <section className="myPosts section">
      <div className={Classes.content}>
      {isLoading && posts.length === 0 ? (
          <div className={Classes.spinner}>
            <ClipLoader color="#194770" size={50} />
          </div>
        ) : (
          <ul className={Classes.list}>
            {posts.map((post) => (
              <PostContainer post={post} key={post.postId} t={t} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default MyPosts;
