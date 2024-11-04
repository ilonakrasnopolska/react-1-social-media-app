import React from "react";
import Classes from './Post.module.css'
import {useSelector} from "react-redux";


const Post = ({feedId}) => {
  const post = useSelector(state => state.feeds.feeds.find(post => post.feedId === feedId));

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
        </div>
      </div>
    </li>
  )
}

export default Post;
