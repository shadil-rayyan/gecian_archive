import Image from "next/image";
import React from "react";

const Whoweare = () => {
  return (
    <div className="bg-[#27272A] w-full h-auto md:p-20 p-14 flex flex-col md:flex-row relative overflow-x-clip">
      <div className="w-full md:hidden z-20 bg-red-500">
        {" "}
        {/*Place the Image in this div*/}
        <img src="" alt="img" />
      </div>
      <div className=" w-full md:p-20 text-center text-white z-20">
        <h1 className="  md:pb-10 pb-6 text-[35px] md:text-[40px] font-bold text-shadow-xl">
          WHO WE ARE
        </h1>
        <p className="text-left text-[20px] md:text-[22px] text-shadow-xl">
          We are a group of student who are facing the problems as you. We want
          to help othere to find many oporunities that are laying around waiting
          for you.
        </p>
        <ul className="text-left mt-10 list-disc text-[20px] md:text-[22px] text-shadow-xl">
          <li className="pb-4">
            Find internship that work during your college days{" "}
          </li>
          <li className="pb-4">
            Find scholarship that you are elgible for during your years in
            college
          </li>
          <li>Find online hackathons and open source projects </li>
        </ul>
        <button>
          <div className="w-[137px] h-[45px] bg-[#ffffff] mt-10 rounded-2xl text-black font-davidLibre flex justify-center items-center text-[18.5px] hover:text-white hover:bg-black  drop-shadow-lg">
            About us
          </div>
        </button>
      </div>
      <div className="w-full z-20 bg-red-500 hidden md:block">
        {" "}
        {/*Place the Image in this div*/}
        <img src="" alt="img" />
      </div>
      <div className="md:w-[500.12px] md:h-[500.12px] w-[400.12px] h-[400.12px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute md:bottom-[191.85px] bottom-[100px]  md:left-[180px] left-[120px] transform md:rotate-[145.88deg] rotate-[45.88deg]"></div>
    </div>
  );
};

export default Whoweare;
