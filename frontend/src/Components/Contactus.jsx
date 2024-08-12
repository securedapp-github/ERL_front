import React from "react";
import Location from "../Asserts/Location.png";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Contactus() {
  return (
    <div className="w-full bg-[#021317] py-10 px-2">
      <p className="text-white text-3xl text-center lg:text-start lg:ml-40 mb-12 lg:mb-0 font-semibold">
        Contact us
      </p>

      <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-0">
        <div className="w-full lg:w-[50%] flex justify-center items-center ">
          <form className="flex flex-col gap-3 w-96">
            <input
              type="text"
              placeholder="Name"
              className="px-3 py-3 bg-white rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-3 bg-white rounded-md"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
              className="bg-white rounded-md px-3 py-3"
            ></textarea>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name=""
                id="Check"
                className="border-white  h-5"
              />
              <label htmlFor="Check" className="text-white">
                I would like to receive the newsletter.
              </label>
            </div>
            <button className="bg-white px-5 py-2 mr-auto text-black rounded-lg font-medium">
              Submit
            </button>
          </form>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-5">
            <p className="text-white">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Nunc vulputate libero et velit interdum, ac aliquet odio <br />{" "}
              mattis.
            </p>
            <img src={Location} alt="Location" />
            <div className=" flex flex-col justify-start gap-5 items-start">
              <div>
                <p className="text-white">NYC, United States</p>
                <p className="text-white">000111222333</p>
                <p className="text-white">somebody@gmail.com</p>
              </div>
              <div className="">
                <div className=" flex items-baseline space-x-4">
                  <div className="flex gap-7">
                    <a href="#">
                      <div className="border bottom-2 border-white p-2 rounded-full">
                        <PiTelegramLogoDuotone className="text-white text-xl" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="border bottom-2 border-white p-2 rounded-full">
                        <BsTwitterX className="text-white text-lg" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="border bottom-2 border-white p-2 rounded-full">
                        <FaDiscord className="text-white text-xl" />
                      </div>
                    </a>
                    <a href="#">
                      <div className="border bottom-2 border-white p-2 rounded-full">
                        <FaFacebookF className="text-white text-xl" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
