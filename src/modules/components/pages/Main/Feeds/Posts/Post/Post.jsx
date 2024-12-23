import React from "react";
import Classes from './Post.module.css'

const Post = ({post, t}) => {
  const {avatar, name, time, content, poster} = post
  return (
    <li className={Classes.item}>
      <div className={Classes.container}>
        <div className={Classes.creator}>
          <img className={Classes.avatar}
               src={avatar}
               alt="Post avatar"
          />
          <div className={Classes.info}>
            <div>
              <h3>{t(name)}</h3>
              {name === 'AniHub' && <span role="img" aria-label="verified">✔️</span>}
            </div>
            <div>
              <span>{time}</span>
            </div>
          </div>
        </div>
        <div className={Classes.content}>
          <span>
           {content}
          </span>
          {poster && <img src={poster} alt="Poster" className={Classes.poster}/>}
        </div>
      </div>
    </li>
  )
}

export default Post;
