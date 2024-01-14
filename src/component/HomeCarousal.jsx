import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import HomeBox from "./HomeBox";
import { useMovie } from "../context/MovieCont";

const HomeCarousal = ({ img }) => {
  const { movie, setMovie } = useMovie();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const opacity = Math.min(scrollPosition / 500, 1);

  let imgUrl = movie
    ? movie
    : "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/5517/1625517-h-450c3df387fe";
  return (
    <div className="bg-black">
      <Box
        sx={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          objectFit: "fill",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "90vh",
          margin: 0,
          marginBottom: "50px",
          overflow: "hidden",
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `rgba(0, 0, 0, ${opacity})`,
            zIndex: 1,
          },
        }}
      >
        <div className="absolute md:bottom-10 bottom-60 md:left-10 left-0 md:w-auto w-full z-10 px-4">
          <HomeBox />
        </div>
      </Box>
    </div>
  );
};

export default HomeCarousal;
