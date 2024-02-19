import React from "react";
import Button from "../assets/components/Button";
import { Link } from "react-router-dom";
import FlourishLogo from "../assets/components/FlourishLogo";

export default function Signup() {
  return (
    <div
      className="relative flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(/src/assets/bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" flex flex-col z-10 border-2 bg-[#FAFAFF] rounded-lg px-5 py-12 sm:p-12 max-w-sm sm:max-w-lg">
        <FlourishLogo></FlourishLogo>
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold ">Sign up</h1>
        </div>
        <form className=" flex flex-col space-y-3  md:w-full">
          <div className="flex flex-col">
            <label htmlFor="Username">Username</label>
            <input type="text" id="Username" className="inputfields" />
          </div>

          <div className="flex space-x-3 ">
            <div className="flex flex-col w-full">
              <label htmlFor="Firstname">First Name</label>
              <input type="text" id="Firstname" className="inputfields" />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="Lastname">Last Name</label>
              <input type="text" id="Lastname" className="inputfields" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input type="text" id="Email" className="inputfields" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Contactnumber">Contact Number</label>
            <input type="text" id="Contactnumber" className="inputfields" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" className="inputfields" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input type="password" id="ConfirmPassword" className="inputfields" />
          </div>

          <div className="items-center flex-col flex">
            <Button name="Sign Up"></Button>
            <p className="text-sm">
              Already have an account?{" "}
              <Link to = "/signin">
                <span className="text-blue-600 text-sm underline hover:text-blue-800 active:text-blue-600">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
