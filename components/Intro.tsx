import React from "react";

const Intro = () => {
  return (
    <div className="flex h-[400px] bg-[#27272A]">
      <div className=" w-full flex justify-start items-center p-36">
        <p className="text-white text-[50px] w-[40px]  ">INTRODUCING REPETO</p>
      </div>
      <div className=" w-full text-center">
        <p className="text-white text-[20px] p-10 pt-24 text-left">
          We all know that many events repeat every year like that Scholarship, Internship, Hackathon also happen.So we are Introducing Repeto that will help you gain all these information at your fingertip.
        </p>
        <button >
          <div className="w-[157px] h-[45px]  bg-[#ffffff] mt-20 rounded-xl text-black font-davidLibre flex justify-center items-center text-[18.5px] hover:bg-[#f0d9cb]  drop-shadow-lg">
            Repeto
          </div>
        </button>
      </div>
    </div>
  );
};

export default Intro;
