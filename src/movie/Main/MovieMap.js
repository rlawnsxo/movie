import React from "react";
import { useNavigate } from "react-router-dom";

const MovieMap = (movie) => {
  let navigate = useNavigate();
  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
    e.preventDefault();
  };
  const getData = () => {};
  const clickOrDrag = (movie, e) => {
    const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 5 &&
      mouseUp > window.checkForDrag - 5
    ) {
      navigate("/detail", { state: movie });
    }
  };
  return (
    <div
      key={movie.id}
      onMouseDown={(e) => mouseDownCoords(e)}
      onMouseUp={(e) => clickOrDrag(movie, e)}
    >
      <img style={{ padding: "10px" }} src={movie.movie.medium_cover_image} />
      <h2>{movie.movie.title}</h2>
      <ul>
        {movie.movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieMap;
