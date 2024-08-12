import React from "react";
import Logo from "../Asserts/Brandlogo.png";
import Tick from "../Asserts/Tick.png";

export default function Landing() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* <p className="text-white text-center text-xl">
          Unlock Innovation with Token: Your Key to<br /> Blockchain Integration
        </p> */}
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={Logo} alt="Brand Logo" />
          <div className="flex gap-2 justify-center items-center">
            <p className="text-2xl text-white">E-Riyal </p>
            <img src={Tick} alt="" />
          </div>
        </div>
        <div className="w-[90%] sm:[80%] md:w-[60%] text-center">
          <p className="text-zinc-500">
            E-Riyal is a promising digital currency that aims to revolutionize
            financial transactions. It offers a convenient and secure
            alternative to traditional payment methods, with the potential to
            boost economic growth and financial inclusion.
          </p>
        </div>
      </div>

      <div className="w-full  mt-10 flex flex-wrap justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Peer-to-Peer Transactions:</p>
            <p className="text-zinc-500">
              Facilitating seamless and secure money transfers between
              individuals and businesses.
            </p>
          </div>

          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">E-commerce and Retail:</p>
            <p className="text-zinc-500">
              Enabling frictionless online and in-store payments.
            </p>
          </div>

          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Government Service:</p>
            <p className="text-zinc-500">
              Streamlining government payments and benefit disbursements.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Remittances:</p>
            <p className="text-zinc-500">
              Providing a cost-effective and efficient way for overseas Saudis
              to send money home.
            </p>
          </div>

          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Multi-Level Marketing (MLM):</p>
            <p className="text-zinc-500">
              Enabling MLM companies to operate more efficiently with
              transparent and traceable transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:[80%] md:w-[60%] text-center mt-10">
        <p className="text-white">
          By leveraging blockchain technology, the E-Riyal token has the
          potential to transform the Saudi Arabian financial landscape and drive
          economic growth.
        </p>
      </div>

      <div className="w-full h-[2px] bg-zinc-900 mt-14"></div>

      <div className="w-full  mt-10 flex flex-wrap justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Audit</p>
            <p className="text-white">12 August 2024</p>
          </div>

          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white">Blockchain</p>
          </div>

          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            {/* <p className="text-white underline">Government Service:</p> */}
            <p className="text-white">Use case utility</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Team members and Advisors</p>
            <p className="text-white">Member : Name - Role</p>
            <p className="text-white">Advisor : Name - Role</p>
          </div>

          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Contact Team</p>
            <p className="text-white">Yourname@company.io</p>
          </div>

          <div className="w-80 h-36  rounded-xl  border-2 border-zinc-900 px-4 py-4">
            <p className="text-white underline">Address</p>
            <p className="text-white">Physical address of the project office</p>
          </div>
        </div>
      </div>

      <div className="w-[96%] sm:w-[87%] md:w-[70%] flex flex-col gap-4 mt-12 mb-14">
        <p className="text-white text-2xl">Project Description</p>
        <p className="text-white text-sm">
          The E-Riyal token represents a groundbreaking initiative to digitize
          any economy. As a digital representation of the Saudi Riyal, it aims
          to streamline financial transactions, enhance financial inclusion, and
          foster innovation within the kingdom.
        </p>
      </div>
    </div>
  );
}
