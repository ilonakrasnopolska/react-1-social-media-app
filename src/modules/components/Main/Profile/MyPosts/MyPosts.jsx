import React from "react";
import {useSelector} from "react-redux";
import Classes from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = () => {
  const posts = useSelector(state => state.profile.posts);
  const postsElements = posts.map(el =>
    <Post name={el.name} message={el.message}
          comments={el.comments} likes={el.likes} time={el.time}
          key={el.postId} postId={el.postId} newCommentText={el.newCommentText}
          isLiked={el.likedByUser} commentData={el.commentData}/>)
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
