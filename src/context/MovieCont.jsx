import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext({
  movie: "",
  setMovie: () => {},
  loading: true,
  setLoading: () => {},
});

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <MovieContext.Provider value={{ movie, setMovie, loading, setLoading }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
export const useLoading = () => {
  return useContext(MovieContext);
};
