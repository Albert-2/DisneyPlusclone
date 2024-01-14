import React, { useEffect, useState } from "react";
import DisneyLogo from "../assets/logo.svg";
import { auth, provider } from "../Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setUserLogInDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Navbar = () => {
  const [subMenu, setSubMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => alert(error.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLogInDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleClick = () => {};
  return (
    <div className=" flex items-center justify-between  md:px-5 px-3 md:gap-10 gap-6 h-20 text-white sticky top-0 w-full z-50 bg-black ">
      <img
        src={DisneyLogo}
        alt="logo"
        className="h-full py-2 cursor-pointer "
      />
      <div className="flex items-center justify-end h-full w-full ">
        {userName ? (
          <>
            <ul className="flex items-center lg:text-base font-semibold text-sm justify-start  gap-5 flex-1 ">
              <Link to="/home">
                <li className="liStyle group">
                  <i className="fa-solid fa-house"></i>
                  <h4 className=" lg:block hidden">HOME</h4>
                  <span className="spanStyle group-hover:w-full"></span>
                </li>
              </Link>
              <Link to="/in/explore">
                <li className="liStyle group">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <h4 className=" lg:block hidden">SEARCH</h4>
                  <span className="spanStyle group-hover:w-full"></span>
                </li>
              </Link>
              <li className="liStyle group">
                <i className="fa-solid fa-plus"></i>
                <h4 className=" lg:block hidden">WAITLIST</h4>
                <span className="spanStyle group-hover:w-full"></span>
              </li>
              <li
                className="liStyle group lg:hidden block relative"
                onClick={() => setSubMenu(!subMenu)}
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
                <nav
                  className={`absolute top-10 sm:left-0 -left-36 p-4 gap-3 bg-black border-2 border-white rounded-md  items-start justify-center flex-col w-[160px] ${
                    subMenu ? "flex" : "hidden"
                  }`}
                  onMouseLeave={() => setSubMenu(!subMenu)}
                >
                  <li className=" py-3">
                    <i className="fa-solid mr-3 fa-star"></i>ORIGINALS
                  </li>
                  <li className=" py-3">
                    <i className="fa-solid mr-3 fa-film"></i>MOVIES
                  </li>
                  <li className=" py-3">
                    <i className="fa-solid mr-3 fa-clapperboard"></i>SERIES
                  </li>
                </nav>
              </li>
              <li className="liStyle group lg:flex hidden">
                <i className="fa-solid fa-star"></i>
                <h4>ORIGINALS</h4>
                <span className="spanStyle group-hover:w-full"></span>
              </li>
              <li className="liStyle group lg:flex hidden">
                <i className="fa-solid fa-film"></i>
                <h4>MOVIES</h4>
                <span className="spanStyle group-hover:w-full"></span>
              </li>
              <li className="liStyle group lg:flex hidden">
                <i className="fa-solid fa-clapperboard"></i>
                <h4>SERIES</h4>
                <span className="spanStyle group-hover:w-full"></span>
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <div className="relative group ">
                <img
                  src={userPhoto}
                  alt="user"
                  className="h-10 w-10 rounded-full object-cover mr-2 cursor-pointer"
                />
                <button
                  className="absolute top-10 right-0 group-hover:block hidden w-[100px] border-2 border-white rounded-md p-2 hover:bg-white hover:text-black font-semibold"
                  onClick={handleAuth}
                >
                  Log Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <button
            className="border-2 border-white rounded-md py-2 px-4 hover:bg-white hover:text-black font-semibold"
            onClick={handleAuth}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
