import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../component/Button";
import { Img, NainImg, Title } from "./MovieDetailStyle";

const MovieDetail = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <NainImg img={state.movie.medium_cover_image}>
        <img style={{ zIndex: 2 }} src={state.movie.medium_cover_image} />
      </NainImg>
      <Button />
      <Title>
        {state.movie.title}({state.movie.year})
      </Title>
    </>
  );
};

export default MovieDetail;
