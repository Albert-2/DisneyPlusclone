import React, { useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Movie from "./Movie";
import { useState, useRef } from "react";
import { useMovie } from "../context/MovieCont";
import Skeleton from "./Skeleton";
const screenWidth = window.innerWidth;
const MovieCarsl = ({ pIndex, movies, title }) => {
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const elementRef = useRef();
  const { loading, setLoading } = useMovie();
  return (
    <>
      <div className="z-10 md:px-10 px-0">
        <h1 className="text-xl font-semibold text-white px-4 z-10">{title}</h1>
        <HiChevronLeft
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer z-50 hover:block"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 z-50 hover:block"
          onClick={() => sliderRight(elementRef.current)}
        />
        <div
          className="flex gap-4 h-[350px] overflow-x-auto w-full px-6 py-10 scrollbar-none scroll-smooth"
          ref={elementRef}
        >
          {movies.map((item, index) => {
            return loading ? (
              <Skeleton key={index} className={"min-h-[260px] min-w-[250px]"} />
            ) : (
              <Movie
                key={index}
                name={item.title.originalTitleText.text}
                img={item.title.primaryImage.imageUrl}
                year={item.title.releaseYear.year}
                parent={pIndex}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieCarsl;
