import Image from "next/image";
import React from "react";

const Whoweare = () => {
  return (
    <div className="bg-[#27272A] w-full h-screen p-20 flex relative overflow-hidden">
      <div className=" w-full p-20 text-center text-white z-20">
        <h1 className="underline  pb-10 text-[40px]  ">WHO WE ARE</h1>
        <p className="text-left text-[22px]">
          We are a group of student who are facing the problems as you. We want
          to help othere to find many oporunities that are laying around waiting
          for you.
        </p>
        <ul className="text-left mt-10 list-disc text-[22px]">
          <li className="pb-4">
            Find internship that work during your college days{" "}
          </li>
          <li className="pb-4">
            Find scholarship that you are elgible for during your years in
            college
          </li>
          <li>Find online hackathons and open source projects </li>
        </ul>
        <button >
          <div className="w-[137px] h-[45px] bg-[#ffffff] mt-10 rounded-2xl text-black font-davidLibre flex justify-center items-center text-[18.5px] hover:bg-[#f0d9cb]  drop-shadow-lg">
            About us
          </div>
        </button>
      </div>
      <div className="bg-red-800 w-full z-20">
        <img src=""
        alt="img"/>
      </div>
      <div className="w-[842.12px] h-[674.12px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute bottom-[21.85px] -right-[391.03px] transform rotate-[145.88deg]"></div>
    </div>
  );
};

export default Whoweare;
