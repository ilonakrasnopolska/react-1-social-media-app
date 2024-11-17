import React from "react";
import Classes from './Post.module.css'

const Post = ({post}) => {
  return (
    <li className={Classes.item}>
      <div className={Classes.container}>
        <div className={Classes.creator}>
          <img className={Classes.avatar}
               src={post.avatar}
               alt="Post avatar"
          />
          <div className={Classes.info}>
            <div>
              <h3>{post.name}</h3>
              {post.name === 'AniHub' && <span role="img" aria-label="verified">✔️</span>}
            </div>
            <div>
              <span>{post.time}</span>
            </div>
          </div>
        </div>
        <div className={Classes.content}>
          <span>
           {post.content}
          </span>
          {post.poster && <img src={post.poster} alt="Poster" className={Classes.poster}/>}
        </div>
      </div>
    </li>
  )
}

export default Post;
