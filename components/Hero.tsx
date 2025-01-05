import React from "react";

const Hero = () => {
  return (
    <div className=" h-screen bg-gradient-to-t from-[#104E69] to-[#2AACCA] flex  justify-start items-center relative overflow-hidden">
      <div className="flex flex-col w-1/2 pl-32 z-20">
        <p className="text-white font-bold text-[50px] w-3/4 pb-5">
          Welcome To Code Compass
        </p>
        <p className="text-white font-bold text-[20px]">
          Join a vibrant community of engineering students driven by innovation
          and growth. At Code Compass Club, we organize exciting hackathons,
          skill-building workshops, fun quizzes, and impactful events to inspire
          and empower future engineers.
        </p>
      </div>
      <div className="w-[842.12px] h-[674.12px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute -top-[690px] -left-[370px] transform rotate-[115.88deg]"></div>
      <div className="w-[250px] h-[250px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-xl z-10 absolute bottom-[233.85px] left-[175px] transform -rotate-[19.69deg]"></div>
      <div className="w-[842.12px] h-[674.12px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute -top-[233.85px] -right-[301.03px] transform rotate-[115.88deg]"></div>
    </div>
  );
};

export default Hero;
