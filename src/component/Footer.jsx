import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const visibility = location.pathname === "/" ? false : true;
  return (
    <div
      className={`pt-20 pb-4  md:px-16 px-4 flex flex-col gap-10 ${
        visibility ? "block" : "hidden"
      }`}
    >
      <div className="font-semibold  flex md:flex-row flex-col gap-4 justify-between items-stretch">
        <div className="  flex-1">
          <ul className="text-sm text-[#8f98b2] space-y-3">
            <li className="text-lg text-white">Company</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Careers</li>
          </ul>
        </div>
        <div className="  flex-1">
          <ul className="text-sm text-[#8f98b2] space-y-3">
            <li className="text-lg text-white">View Website in</li>
            <li className="cursor-pointer">English</li>
          </ul>
        </div>
        <div className="  flex-1">
          <ul className="text-sm text-[#8f98b2] space-y-3 cursor-pointer">
            <li className="text-lg text-white">Need Help?</li>
            <li>Visit Help Center</li>
            <li>Share Feedback</li>
          </ul>
        </div>
        <div className="  flex-1 text-white space-y-3 text-left">
          <h6 className="text-lg ">Connect with Us</h6>
          <ul className="text-sm  space-y-3 flex items-center justify-start gap-6 cursor-pointer">
            <li>
              <i className="fa-brands fa-facebook-f fa-2xl"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter fa-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="   flex md:flex-row flex-col gap-10 justify-between text-sm text-[#8f98b2] font-semibold">
        <ul className="  space-y-2 md:w-[70%] w-fit">
          <li> &copy; 2023 STAR. All Rights Reserved.</li>
          <li>
            <ul className=" flex gap-3 cursor-pointer">
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </li>
        </ul>
        <div className="  flex gap-3 cursor-pointer md:w-1/4 w-fit">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"
            alt="icon"
            className="min-w-[30%] h-[40px]"
          />
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"
            alt="icon"
            className="min-w-[30%] h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
