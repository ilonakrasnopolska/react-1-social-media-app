import React from "react";
import Classes from "./MyPosts.module.css"
import Post from "./Post/Post"



const MyPosts = (props) => {
  let postsElements = props.posts.map(el =>
    <Post message={el.message} comments={el.comments} likes={el.likes} key={el.id} />)
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
