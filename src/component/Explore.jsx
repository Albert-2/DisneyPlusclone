import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { useMovie } from "../context/MovieCont";
import { Skeleton } from "@mui/material";
import data from "../searchData.json";
const Explore = () => {
  const demo = data.data;
  const { loading, setLoading } = useMovie();
  setLoading(false);
  const [movieName, setMovieName] = useState("avatar");
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <>
      <div className="sm:px-10 px-4 py-5 flex-col flex items-center justify-center gap-5">
        <div className="rounded-md p-5 w-full bg-[#243041] flex items-center justify-center gap-3">
          <i
            className="fa-solid fa-magnifying-glass fa-2xl cursor-pointer"
            style={{ color: "#ffffff" }}
            onClick={handleClick}
          ></i>{" "}
          <input
            type="text"
            placeholder="Movies, shows and more"
            className="w-full bg-transparent border-none outline-none text-[#e1e6f0] flex-1 px-4"
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <div className="flex items-center lg:justify-start justify-center  flex-wrap gap-5 min-h-[50vh]  w-full lg:px-14 px-4 py-20 space-y-5 scrollbar-none scroll-smooth">
          {demo.map((item, index) =>
            loading ? (
              <Skeleton
                sx={{
                  bgcolor: "grey.900",
                  flex: 1,
                  borderRadius: "8px",
                  margin: "4px",
                }}
                variant="rectangular"
                width={250}
                height={260}
                key={index}
              />
            ) : (
              <Movie
                name={item.title}
                img={item.image}
                year={item.year}
                parent={index}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Explore;
