import React from "react";

// Компонент для отображения списка жанров
const Genres = ({ genres }) => {
  return (
    <ul>
      {/* Проходим по массиву жанров и отображаем каждый жанр в списке */}
      {genres.map((genre) => {
        return (
          // Каждый жанр отображается в элементе списка (li) с уникальным ключом
          <li key={genre.mal_id}>{genre.name}</li>
        );
      })}
    </ul>
  );
};

export default Genres;
