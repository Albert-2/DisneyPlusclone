import React, { useEffect, useState } from "react";
import HomeCarousal from "./HomeCarousal";
import MovieCarsl from "./MovieCarsl";
import { useParams } from "react-router-dom";
import { useMovie } from "../context/MovieCont";
import data from "../data.json";

const Trailer = () => {
  const params = useParams();
  const demo = data.data[Number(params.id)].edges;
  const { loading, setLoading } = useMovie();
  setLoading(false);
  return (
    <>
      <div className="bg-black">
        <HomeCarousal />
        <MovieCarsl
          key={Number(params.id)}
          pIndex={Number(params.id)}
          movies={demo}
        />
      </div>
    </>
  );
};

export default Trailer;
