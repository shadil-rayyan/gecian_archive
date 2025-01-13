import React from "react";

const Calendar = () => {
  return (
    <div className="bg-[#27272A] h-auto sm:h-[450px] flex flex-col sm:flex-row p-6 gap-28 items-center justify-center flex-1 relative overflow-x-clip" >
      <div className="w-[500px] h-[400px] md:flex hidden justify-center mt-8 sm:mt-0">
        <img
          src="/Mailimg.png"
          alt="Newsletter Illustration"
          className="object-cover object-center max-w-full"
        />
      </div>
      <div className="flex flex-col gap-8 md:w-1/2 z-50 md:pl-20 p-4 md:text-left text-center items-center md:items-start">
        <p className="text-white font-bold md:text-[48px] text-[35px] md:text-left text-shadow-xl">CALENDAR</p>
        <p className="text-white md:text-[24px] text-[20px] text-shadow-xl ">
          Want to know all the internship,hackathons,Scholarship opprountiy in
          you calender yourself then click below and redirect to our caledner
          and subscribe
        </p>
        <div className="w-[137px] h-[45px] bg-[#ffffff] md:mt-10 rounded-2xl text-black  flex justify-center items-center text-[18.5px] hover:text-white hover:bg-black  drop-shadow-lg font-medium">
          <button>See Calendar</button>
        </div>
      </div>
      <div className="w-[180px] md:w-[200px] h-[400px] md:h-[430.32px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-10 absolute md:top-0 md:left-[909.03px] -top-[20px] left-[80px] transform -rotate-[36.17deg]"></div>
      <div className="w-[180px] md:w-[200px] h-[400px] md:h-[430.32px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-20 absolute md:top-[39.03px] md:left-[1050.03px] top-[0px] left-[160px] transform -rotate-[36.17deg]"></div>
      <div className="w-[180px] md:w-[200px] h-[400px] md:h-[430.32px] bg-gradient-to-t to-[#2CB1CF] from-[#1D7589] shadow-2xl shadow-black z-20 absolute md:top-[78.03px] md:left-[1200.03px] top-[20px] left-[240px] transform -rotate-[36.17deg]"></div>
    </div>
  );
};

export default Calendar;
