import React from "react";

const Genres = ({genres}) => {
  return (
    <ul>
      {genres.map(genre => {
        return <li key={genre.mal_id}>{genre.name}</li>
      })}
    </ul>
  );
};

export default Genres;
