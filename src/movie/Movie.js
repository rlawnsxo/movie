import React from "react";

const Movie = ({ movie }) => {
  return (
    <div key={movie.id}>
      <img src={movie.medium_cover_image} />
      <h2>{movie.title}</h2>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
