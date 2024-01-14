import React, { useEffect, useState } from "react";
import HomeCarousal from "./HomeCarousal";
import MovieCarsl from "./MovieCarsl";
import { useMovie } from "../context/MovieCont";
import data from "../data.json";
const HomePage = () => {
  const demo = data.data;
  const { loading, setLoading } = useMovie();
  setLoading(false);
  const title = [
    "Latest Releases",
    "Free Newly Added",
    "Popular Movies",
    "Watch With Your Family",
    "Most Watched Movies in 2023",
    "Most Watched Web Series in 2023",
    "Popular Movies",
    "Hotstar Specials",
    "Best of Superheros",
    "Coming Soon",
    "Popular  in Action",
  ];
  return (
    <>
      <div className="bg-black">
        <HomeCarousal />
        {demo.map((item, index) => (
          <MovieCarsl
            key={index}
            pIndex={index}
            movies={item.edges}
            title={title[index]}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
