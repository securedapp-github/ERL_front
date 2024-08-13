import React from "react";
import Logo from "../Asserts/Logo.png";

export default function Footer() {
  return (
    <div className="w-full bg-black h-52 flex justify-around items-start">
      <div className="flex justify-center sm:justify-between w-full sm:w-[90%] md:w-[70%] mt-10 flex-wrap gap-3">
        <img src={Logo} alt="Brand Logo" />
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <p className="text-white">Terms of Services</p>
          <div className="w-[2px] h-4 bg-white"></div>
          <p className="text-white">Privacy Policy</p>
          <div className="w-[2px] h-4 bg-white"></div>
          <p className="text-white">Lite Paper</p>
        </div>
      </div>
    </div>
  );
}
