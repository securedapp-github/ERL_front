import React from "react";
import Logo from "../Asserts/Brandlogo.png";
// import Tick from "../Asserts/Tick.png";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="w-full mt-12 flex flex-col justify-center items-center">

      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-white text-center text-xl">
          Unlock Innovation with Token: Your Key to<br /> Blockchain Integration
        </p>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={Logo} alt="Brand Logo" />
          <div className="flex gap-2 justify-center items-center">
            <p className="text-2xl text-white">Token Name</p>
            {/* <img src={Tick} alt="" /> */}
          </div>
          <div className="flex gap-7">
            <a href="#">
              <div className="border bottom-2 border-white p-2 rounded-full">
                <PiTelegramLogoDuotone className="text-white text-3xl" />
              </div>
            </a>
            <a href="#">
              <div className="border bottom-2 border-white p-3 rounded-full">
                <BsTwitterX className="text-white text-xl" />
              </div>
            </a>
            <a href="#">
              <div className="border bottom-2 border-white p-2 rounded-full">
                <FaDiscord className="text-white text-3xl" />
              </div>
            </a>
            <a href="#">
              <div className="border bottom-2 border-white p-2 rounded-full">
                <FaFacebookF className="text-white text-3xl" />
              </div>
            </a>
          </div>
        </div>
        <div className="w-[90%] sm:[80%] md:w-[60%] text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="w-full  mt-10 flex flex-wrap justify-center items-center gap-8">
        <div className="w-60 h-24  rounded-xl flex flex-col justify-center items-center bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-950">
          <p className="text-white">12/08/2024</p>
          <p className=" text-white">Audit</p>
        </div>
        <div className="w-60 h-24  rounded-xl flex flex-col justify-center items-center bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-950">
          <p className="text-white">Blockchain</p>
        </div>
        <div className="w-60 h-24  rounded-xl flex flex-col justify-center items-center bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-950">
          <p className="text-white">Use case utility</p>
        </div>
      </div>

      <div className="w-full flex mt-20 justify-center items-start flex-wrap gap-5">
        <div className="w-80 flex flex-col justify-center items-center gap-3">
          <p className="text-white text-lg">Team members and Advisors</p>
          <div className="w-[85%] h-1 bg-zinc-900"></div>
          <div className="flex flex-col gap-2">
          <p className="text-white">Member : Name - Role</p>
          <p className="text-white">Advisor : Name - Role</p>
          </div>
        </div>
        <div className="w-80 flex flex-col justify-center items-center gap-3">
          <p className="text-white text-lg">Contact Team</p>
          <div className="w-[85%] h-1 bg-zinc-900"></div>
          <div className="flex flex-col gap-2">
          <p className="text-white">email123@gmail.com</p>
          </div>
        </div>
        <div className="w-80 flex flex-col justify-center items-center gap-3">
          <p className="text-white text-lg">Address</p>
          <div className="w-[85%] h-1 bg-zinc-900"></div>
          <div className="flex flex-col gap-2">
          <p className="text-white">Physical address of<br /> the project's office</p>
          </div>
        </div>
        
      </div>

      <div className="w-[96%] sm:w-[87%] md:w-[70%] flex flex-col gap-4 mt-12">
        <p className="text-white text-2xl">Project Description</p>
        <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p className="text-white text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text-white text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p className="text-white text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>

    </div>
  );
}
