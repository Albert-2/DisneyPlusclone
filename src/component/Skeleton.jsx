import React from "react";

const Skeleton = ({ className }) => {
  return <div className={`bg-[#242940] ${className} animate-pulse`} />;
};

export default Skeleton;
