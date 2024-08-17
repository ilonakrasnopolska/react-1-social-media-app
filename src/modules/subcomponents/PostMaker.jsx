import React from "react";

const PostMaker = () => {
  return (
    <section className="section-post">
      <div className="post">
        <h3 className="post__title">My posts</h3>
        <form className="post__form" action="" method="POST">
          <textarea className="post__content" placeholder="your news..."></textarea>
          <button className="post__submit" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default PostMaker;
