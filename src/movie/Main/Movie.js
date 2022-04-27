import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieMap from "./MovieMap";
import { StyledSlider } from "./MovieStyle";
import MyView from "./MyView";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  // autoplay: true,
  // autoplaySpeed: 3000,
  arrows: true,
};
const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `
      https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Tegh coins</h1>
      {loading ? (
        <strong>loading....</strong>
      ) : (
        <>
          <StyledSlider {...settings}>
            {movies.map((movie) => (
              <MovieMap key={movie.id} movie={movie} />
            ))}
          </StyledSlider>
        </>
      )}
      <MyView />
    </div>
  );
};

export default Movie;
