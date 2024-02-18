import React from "react";
import { Link } from "react-router-dom";
import FlourishLogo from "../components/FlourishLogo";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 p-4 z-50 h-full flex flex-col w-28  items-center space-y-5 bg-[#FAFAFF]">
      <FlourishLogo></FlourishLogo>
      <Link className="" to="/">
        <div className="shadow-lg w-20 py-2 max-w-28  bg-[#A8A8A8] focus:bg-[#F9B131] hover:bg-[#F9B131] hover:active:bg-[#F9B131] text-sm text-white text-semibold rounded-lg flex flex-col items-center justify-center">
          <img className="h-8" src="home.png" alt="" />
          <span>Home</span>
        </div>
      </Link>

      <Link to="/recipies">
        <div className="shadow-lg w-20 py-2 max-w-28  bg-[#A8A8A8] hover:bg-[#F9B131] hover:active:bg-[#F9B131] text-sm text-white text-semibold rounded-lg flex flex-col items-center justify-center">
          <img className="h-8" src="recipies.png" alt="" />
          <span>Recipies</span>
        </div>
      </Link>

      <Link to="/social">
        <div className="shadow-lg w-20 py-2 max-w-28  bg-[#A8A8A8] hover:bg-[#F9B131] hover:active:bg-[#F9B131] text-sm text-white text-semibold rounded-lg flex flex-col items-center justify-center">
          <img className="h-8" src="social.png" alt="" />
          <span>Social</span>
        </div>
      </Link>

      <Link to="/Profile">
        <div className="shadow-lg w-20 py-2 max-w-28  bg-[#A8A8A8] hover:bg-[#F9B131] hover:active:bg-[#F9B131] text-sm text-white text-semibold rounded-lg flex flex-col items-center justify-center">
          <img className="h-8" src="profile.png" alt="" />
          <span>Profile</span>
        </div>
      </Link>

      <div className=" border-2 px-3 rounded-lg shadow-lg border-red-500 py-2 text-sm text-red-700 font-semibold">
        <img className="h-8" src="logout.png" alt="" />
        <span>Log out</span>
      </div>
    </div>
  );
}
