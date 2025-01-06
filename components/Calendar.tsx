import React from "react";

const Calendar = () => {
  return (
    <div className="bg-[#27272A] h-auto sm:h-[450px] flex flex-col sm:flex-row p-2 gap-28 items-center justify-center flex-1 relative " >
      <div className="w-[500px] h-[400px] flex justify-center mt-8 sm:mt-0">
        <img
          src="/Mailimg.png"
          alt="Newsletter Illustration"
          className="object-cover object-center max-w-full"
        />
      </div>
      <div className="flex flex-col gap-8 w-1/2 z-50 pl-20">
        <p className="text-white font-bold text-[48px] text-left">CALENDAR</p>
        <p className="text-white text-[22px]">
          Want to know all the internship,hackathons,Scholarship opprountiy in
          you calender yourself then click below and redirect to our caledner
          and subscribe
        </p>
        <div className="w-[137px] h-[45px] bg-[#ffffff] mt-10 rounded-2xl text-black  flex justify-center items-center text-[18.5px] hover:text-white hover:bg-black  drop-shadow-lg ">
          <button>See Calendar</button>
        </div>
      </div>
      <div className="w-[200px] h-[430.32px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-10 absolute top-0 left-[909.03px] transform -rotate-[36.17deg]"></div>
      <div className="w-[200px] h-[430.32px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-20 absolute top-[39.03px] left-[1050.03px] transform -rotate-[36.17deg]"></div>
      <div className="w-[200px] h-[430.32px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-20 absolute top-[78.03px] left-[1200.03px] transform -rotate-[36.17deg]"></div>
    </div>
  );
};

export default Calendar;
