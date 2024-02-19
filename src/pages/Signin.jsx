import React from "react";
import { Link } from "react-router-dom";
import Button from "../assets/components/Button";


const Signin = () => {
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

      <form className="relative z-10 w-96 flex flex-col  space-y-5 items-center py-12  px-6 sm:p-12 text-black bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold ">Sign In</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="username" className="text-md  text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className=" p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-md ">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <div className="flex justify-end">
            <span className="text-sm underline hover:text-blue-500 ">
              Forgot Password?
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col space-y-3">
          <Button name = "Sign in"></Button>
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-blue-600 text-sm underline hover:text-blue-800 active:text-blue-600">
                Sign up?
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
