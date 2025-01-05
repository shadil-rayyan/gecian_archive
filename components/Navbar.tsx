"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className=" bg-white relative z-50 border-b-2  border-black">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-5">
       
        <div className="flex flex-row font-poppins font-bold text-[26px] z-10 items-center relative text-black">
          Logo
        </div>

       
        <div className="flex justify-around gap-8 text-[17.5px] font-inter text-black">
          <Link href="/">Home</Link>
          <Link href="/">Campus</Link>
          <Link href="/">Calendar</Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

           
            {dropdownOpen && (
              <div className="absolute  mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <Link
                  href="/option1"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Option 1
                </Link>
                <Link
                  href="/option2"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Option 2
                </Link>
                <Link
                  href="/option3"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Option 3
                </Link>
              </div>
            )}
          </div>
        </div>

        <button>
          <div className="w-[117px] h-[45px] bg-[#000000] rounded-3xl text-white font-davidLibre flex justify-center items-center text-[15.5px] hover:bg-[#21130b] drop-shadow-lg">
            Repeto
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
