import React from "react";
import { Link } from "react-router-dom";
const HomeBox = () => {
  return (
    <div className=" text-white  flex md:items-start items-center justify-center gap-3 flex-col md:w-[55%] w-full ">
      <img
        src="	https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/7501/1627501-t-49bed6b86926"
        alt="logo"
      />
      <span className="text-blue-400 text-lg font-semibold">New Release</span>
      <div className="font-bold text-white text-lg flex items-center justify-start  gap-2">
        <div className="flex items-center justify-center gap-2 ">
          <span>2023</span>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <span>1h 35m</span>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <span>Hindi</span>
        </div>
      </div>
      <p className="text-[#ffffffd6]  md:block hidden ">
        When an ordinary girl is forced to survive in an extraordinarily
        dangerous situation, nothing is off-limits.
      </p>
      <div className="md:flex hidden items-center justify-start  gap-4 font-bold text-white  w-full ">
        <span>Thriller</span>
        <span>Crime</span>
        <span>Intense</span>
        <span>Inspired by True Events</span>
      </div>
      <div className="flex items-center justify-start gap-4  w-full">
        <button className="bg-white rounded-md text-black p-3 font-semibold w-full hover:cursor-pointer hover:scale-105 transition-all duration-500">
          <i className="fa-solid fa-play fa-sm mx-2 "></i>
          Subscribe to Watch
        </button>
        <button className="bg-slate-400 rounded-md p-2 w-1/12 hover:cursor-pointer hover:scale-105 transition-all duration-500 border-2 border-white md:block hidden">
          <i className="fa-solid fa-plus fa-sm "></i>
        </button>
      </div>
    </div>
  );
};

export default HomeBox;
