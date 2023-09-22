import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="myContainer sticky top-0 bg-gray-200 flex rounded-xl items-center mx-auto flex-wrap z-10 p-6">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border hover:bg-blue-500 hover:border-blue">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 0h20v20H0z" fill="none" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 4h20v2H0V4zm0 5h20v2H0V9zm0 5h20v2H0v-2z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-500 mr-4"
          >
            Home
          </Link>
          <a
            href="/races"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-500 mr-4"
          >
            Races
          </a>
          <a
            href="/plans"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-500 mr-4"
          >
            Plans
          </a>
          <a
            href="/paces"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-blue-500"
          >
            Paces
          </a>
        </div>
        <div className="text-sm flex items-center">
          <Link
            href="/login"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
