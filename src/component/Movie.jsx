import React from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../context/MovieCont";

const Movie = ({ name, img, year, parent }) => {
  const { movie, setMovie } = useMovie();
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "contain",
  };
  return (
    <>
      <div
        className="sm:min-w-[250px] min-w-full flex-1 min-h-[260px] rounded-md relative group sm:hover:scale-125 hover:scale-110 transition-all delay-500 z-10 hover:z-40"
        style={divStyle}
      >
        <div className="absolute h-full bottom-0 w-full  min-w-[200px] rounded-md group flex flex-col items-start justify-end gap-1 text-[12px] opacity-0 group-hover:opacity-100 transition-all delay-500 p-2 card-body cursor-pointer select-none">
          <div className=" flex gap-2 w-full ">
            <Link to={`/movie/${parent}/${name}'`} className="w-4/5">
              <button
                className="rounded-md text-black font-semibold w-full p-2  bg-white"
                onClick={() => setMovie(img)}
              >
                <i className="fa-solid fa-play fa-sm mx-2"></i>
                Watch Now
              </button>
            </Link>
            <button className=" rounded-md p-2 border-2 border-white">
              <i
                className="fa-solid fa-plus fa-sm"
                style={{ color: "white" }}
              ></i>
            </button>
          </div>
          <div className="font-bold text-white flex justify-start items-start gap-1">
            <div className="flex items-center justify-center gap-2 ">
              <span>{year} |</span>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <span>1h 56m |</span>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <span>Hindi |</span>
            </div>
            <div className="flex items-center justify-center gap-2 ">
              <span>U</span>
            </div>
          </div>
          <p className="text-white ">
            Bobby, a small-time detective in Hyderabad, gets a breakthrough when
            a
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
