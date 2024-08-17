import React from "react";

const Timeline = () => {
  return (
    <section className="section-timeline">
      <div className="timeline">
        <ul className="timeline__list">
          <li className="timeline__item">
            <img className="timeline__avatar"
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className="timeline__post">
              Who is your favourite character in Naruto?
            </div>
          </li>
          <li className="timeline__item">
            <img className="timeline__avatar"
                 src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
                 alt="User avatar"
            />
            <div className="timeline__post">
              Hello people!
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
