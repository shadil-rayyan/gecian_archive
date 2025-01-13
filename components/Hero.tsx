import React from "react";

const Hero = () => {
  return (
    <div className=" h-screen bg-gradient-to-t from-[#104E69] to-[#2AACCA] flex  justify-start items-center relative overflow-hidden">
      <div className="flex flex-col lg:w-1/2 md:pl-32 p-8 z-20">
        <p className="text-white font-bold md:text-[50px] text-[40px] md:w-3/4 pb-5 text-shadow-xl">
          Welcome To <br/>Code Compass
        </p>
        <p className="text-white md:font-semibold md:text-[20px] text-[16px] text-shadow-xl">
          Join a vibrant community of engineering students driven by innovation
          and growth. At Code Compass Club, we organize exciting hackathons,
          skill-building workshops, fun quizzes, and impactful events to inspire
          and empower future engineers.
        </p>
      </div>
      <div className="md:w-[842.12px] w-[300px] h-[250px] md:h-[674.12px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute md:-top-[690px] -top-[110px] md:-left-[370px] -left-[90px] transform rotate-[115.88deg] transition-all duration-300 ease-in-out"></div>
      <div className="md:w-[250px] w-[220px] h-[220px] md:h-[250px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute md:bottom-[233.85px] bottom-[200px] md:left-[175px] left-[100px] transform -rotate-[29.69deg] transition-all duration-300 ease-in-out"></div>
      <div className="lg:w-[842.12px] w-[80px] h-[80px] ] lg:h-[674.12px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute md:-top-[233.85px] top-[100px] md:-right-[301.03px] right-[80px] transform rotate-[115.88deg] transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default Hero;
