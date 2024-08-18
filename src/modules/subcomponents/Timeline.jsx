import React from "react";
import Classes from '../css/Timeline.module.css';

const Timeline = () => {
  return (
    <section className="timeline section">
      <div className={Classes.content}>
        <ul className={Classes.list}>
          <li className={Classes.item}>
            <img className={Classes.avatar}
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className={Classes.post}>
              Who is your favourite character in Naruto?
            </div>
          </li>
          <li className={Classes.item}>
            <img className={Classes.avatar}
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className={Classes.post}>
              Hello people!
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
