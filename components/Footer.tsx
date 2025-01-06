import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#27272A] h-[350px] flex flex-col p-10">
      <div className=" w-full flex justify-between pb-16 border-b border-white">
        <div className=" flex flex-col gap-4">
          <div className="text-white font-bold text-[26px]">Logo</div>
          <div className="flex gap-10 text-white">
            <a href="/">Home</a>
            <a href="/">Contact Us</a>
            <a href="/">Repeto</a>
            <a href="/">Whatsapp</a>
            <a href="/">LinkedIn</a>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <div className="text-white font-semibold text-[22px]">Subscribe</div>
          <div className="flex gap-10 text-white">
            <input
              placeholder="Enter Your Email"
              type="email"
              className="p-3 text-black rounded-full text-[15px] w-[270px] outline-none"
            ></input>
            <button className="text-black bg-white px-6 rounded-full hover:text-white hover:bg-black">
              Subscribe
            </button>
          </div>
          <p className="text-white">
            By subscribing you agree to with our{" "}
            <span className="underline">Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className=" pt-10 w-full flex justify-between text-white ">
        <div className="flex gap-10 underline">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookies Settings</a>
        </div>
        <div className="">@2024 Code Compass.All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
