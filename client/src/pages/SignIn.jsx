import React from "react";
import LogoAppear from "../components/LogoAppear";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div>
        <div className="container mx-auto sm:justify-around sm:pt-56 gap-10 px-4 py-4 h-screen mt-10  sm:flex">
          {/* Left side */}
          <LogoAppear
            pageTitle="Sign In"
            message="Welcome back. Sign in to continue using some functionalities of DSTBQ"
            className="flex-1"
          />
          {/* right side */}
          <div className="form">
            <form className="flex flex-col flex-1 gap-5 mt-20 sm:mt-0">
              <input
                type="text"
                placeholder="username"
                id="username"
                className="border-b rounded px-5 py-3 outline-none"
              />
              <input
                type="email"
                name=""
                id="email"
                placeholder="email"
                className="border-b rounded px-5 py-3 outline-none"
              />
              <input
                type="password"
                placeholder="password"
                id="password"
                className="border-b rounded px-5 py-3 outline-none"
              />
              <button className="border py-3 rounded bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white mt-5">
                Sign In
              </button>
            </form>
            <p className="mt-3 text-center">
              Don't have an account with DSTBQ?{" "}
              <span className="text-blue-500 ml-4">
                <Link to="/signUp">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
