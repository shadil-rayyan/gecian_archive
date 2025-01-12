import React from "react";

const Intro = () => {
  return (
    <div className=" relative flex flex-col md:flex-row md:h-[450px]  bg-[#27272A] md:overflow-hidden">
      <div className=" w-full flex justify-center md:justify-start items-center md:p-36 ">
        <p className=" text-white  md:text-[50px] md:w-[40px] text-[35px] z-30  font-bold ">INTRODUCING REPETO</p> 
      </div>
      <div className=" md:w-full text-center flex flex-col justify-center items-center">
        <p className="text-white md:text-[22px] text-[20px] text-center md:text-left p-10 md:pt-24 z-30 text-shadow-xl">
          We all know that many events repeat every year like that Scholarship,
          Internship, Hackathon also happen.So we are Introducing Repeto that
          will help you gain all these information at your fingertip.
        </p>
        <button className="z-30">
          <div className="w-[137px] h-[45px]  bg-[#ffffff] md:mt-12 rounded-xl text-black font-davidLibre flex justify-center items-center text-[18.5px] hover:text-white hover:bg-black font-medium drop-shadow-lg">
            Repeto
          </div>
        </button>
      </div>
      <div className="md:w-[200px] md:h-[430.32px] w-[170px] h-[370px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-20 absolute md:top-[155.85px] top-[130px] left-[50px] md:left-[221.03px] transform transition-all duration-300 -rotate-[36.17deg] "></div>
      <div className="md:w-[200px] md:h-[200px] w-[260px] h-[170px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute md:top-[95.85px] top-[80px] md:left-[296.03px] left-[50px] transform transition-all duration-300 -rotate-[36.17deg]"></div>
    </div>
  );
};

export default Intro;
