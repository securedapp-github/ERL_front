import React from "react";

export default function HorizontalRoadmap() {
  return (
    <div className="hidden lg:block w-full mb-20 justify-center items-center ">
      
     
      <div className="flex justify-around relative ">
      <div className="w-full h-[1px] bg-zinc-900 absolute top-2"></div>
        <div className="flex flex-col gap-5">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Project Ideation and
              <br /> Whitepaper
              <br /> Developmen
              <br /> (H1 -2022):
            </p>
            <p className="text-zinc-500">
              Defined the E-Riyal <br /> token's vision, use cases, <br />{" "}
              tokenomics, and legal <br /> framework.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Technical Architecture <br /> and Smart Contract <br />{" "}
              Development <br /> (H2-2022):
            </p>
            <p className="text-zinc-500">
              Established the <br /> underlying blockchain <br /> platform,
              designed <br /> token standards <br /> (ERC-20, BEP-20, etc.),{" "}
              <br /> and developed core <br /> smart contracts.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Token Generation Event <br /> (TGE) and Exchange <br /> Listing
              (H1 2023):
            </p>
            <p className="text-zinc-500">
              Successfully launched <br /> the E-Riyal token on a <br />{" "}
              reputable <br /> cryptocurrency <br /> exchange, providing <br />{" "}
              liquidity and <br /> accessibility to investors.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Wallet Integration and <br /> User Onboarding (H2 <br /> 2023): 
            </p>
            <p className="text-zinc-500">
              Developed compatible <br /> wallets and <br /> streamlined user{" "}
              <br /> onboarding processes <br /> to facilitate token <br />{" "}
              adoption.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Ecosystem Expansion and <br /> Partnership (H1 2024):
            </p>
            <p className="text-zinc-500">
              Established strategic <br /> partnerships with <br /> merchants,{" "}
              <br /> government agencies, <br /> and financial <br />{" "}
              institutions to expand <br /> E-Riyal's utility and <br /> reach.
              Security <br /> Auditing started
            </p>
          </div>
        </div>
      </div>
 


    </div>
  );
}
