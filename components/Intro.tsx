import React from "react";

const Intro = () => {
  return (
    <div className=" relative flex h-[400px] bg-[#27272A] overflow-hidden">
      <div className=" w-full flex justify-start items-center p-36">
        <p className="text-white text-[50px] w-[40px] z-30 font-semibold ">INTRODUCING REPETO</p>
      </div>
      <div className=" w-full text-center">
        <p className="text-white text-[22px] p-10 pt-24 text-left z-30">
          We all know that many events repeat every year like that Scholarship,
          Internship, Hackathon also happen.So we are Introducing Repeto that
          will help you gain all these information at your fingertip.
        </p>
        <button>
          <div className="w-[157px] h-[45px]  bg-[#ffffff] mt-20 rounded-xl text-black font-davidLibre flex justify-center items-center text-[18.5px] hover:text-white hover:bg-black  drop-shadow-lg">
            Repeto
          </div>
        </button>
      </div>
      <div className="w-[200px] h-[430.32px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-20 absolute top-[155.85px] left-[221.03px] transform -rotate-[36.17deg]"></div>
      <div className="w-[200px] h-[200px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl z-10 absolute top-[95.85px] left-[296.03px] transform -rotate-[36.17deg]"></div>
    </div>
  );
};

export default Intro;
