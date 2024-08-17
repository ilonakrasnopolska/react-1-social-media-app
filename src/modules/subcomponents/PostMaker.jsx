import React from "react";

const PostMaker = () => {
  return (
    <section className="section-post">
      <div className="post">
        <h3 className="post__title">My posts</h3>
        <form className="post__form" action="" method="POST">
          <textarea className="post__textarea" placeholder="Your news..."></textarea>
          <div className="post__button-wrapper">
            <button className="post__button-submit" type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
