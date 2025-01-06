import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#27272A] h-auto sm:h-[450px] flex flex-col sm:flex-row p-2 gap-28 items-center justify-center flex-1">
      <div className="flex flex-col gap-8 w-1/2">
        <p className="text-white font-bold text-[48px]">NEWSLETTER</p>
        <p className="text-white text-[22px]">
          Do you want to stay updated about internships, hackathons,
          fellowships, and scholarship news during your college days? Sign up
          for our newsletter to get all these updates at your fingertips.
        </p>
        <div className="flex gap-4 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email Address"
            className="p-2 w-full sm:w-[320px] h-[45px] rounded-xl bg-transparent border-white border text-white"
          />
          <button
            aria-label="Sign up for the newsletter"
            className="w-[107px] h-[45px] bg-[#ffffff] rounded-2xl text-black font-davidLibre flex justify-center items-center text-[18.5px] hover:bg-[#f0d9cb] drop-shadow-lg"
          >
            Sign Up
          </button>
        </div>
        <p className="text-gray-500">
          By clicking Sign Up you're confirming that you agree with our{" "}
          <a href="/" className="underline">Terms and Conditions</a>.
        </p>
      </div>
      <div className="w-[500px] h-[400px] flex justify-center mt-8 sm:mt-0">
        <img
          src="/Mailimg.png"
          alt="Newsletter Illustration"
          className="object-cover object-center max-w-full"
        />
      </div>
    </div>
  );
};

export default Newsletter;
