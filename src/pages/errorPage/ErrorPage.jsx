import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-[#244d3f]">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>

        {/* Message */}
        <p className="text-xl md:text-2xl mt-4">
          Oops! Page not found 😢
        </p>

        {/* Sub text */}
        <p className="mt-2 text-sm md:text-base text-[#244d3f]">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#244d3f] text-white font-semibold rounded-full shadow-lg hover:bg-[#1a8862] transition duration-300"
        >
        Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;