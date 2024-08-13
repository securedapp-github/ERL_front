import React from "react";

export default function VerticalRoadmap() {
  return (
    <div className="mb-12 pl-2 sm:ml-10 md:ml-20 lg:hidden">
      
     <div className="flex flex-col gap-12 relative">
     <div className="h-full w-[2px] bg-zinc-900 absolute left-2 z-0"></div>
     <div className="flex gap-10">
        <div className="mt-3 z-50">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center ">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Project Ideation and Whitepaper Development
              <br /> (H1 -2022):
            </p>
            <p className="text-zinc-500">
              Defined the E-Riyal token's vision, use <br /> cases, tokenomics,
              and legal framework.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="mt-3 z-50">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center ">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
            Technical Architecture and Smart Contract Development <br /> (H2-2022):
            </p>
            <p className="text-zinc-500">
            Established the underlying blockchain platform, designed <br /> token standards (ERC-20, BEP-20, etc.), and developed core <br /> smart contracts.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="mt-3 z-50">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center ">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
            Token Generation Event (TGE) and Exchange Listing <br /> (H1 2023):
            </p>
            <p className="text-zinc-500">
            Successfully launched the E-Riyal token on a <br /> reputable cryptocurrency exchange, providing <br /> liquidity and accessibility to investors.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="mt-3 z-50">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center ">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
            Wallet Integration and User Onboarding <br /> (H2 2023):
            </p>
            <p className="text-zinc-500">
            Developed compatible wallets and streamlined <br /> user onboarding processes to facilitate token <br /> adoption.1
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="mt-3 z-50">
          <div className="w-5 h-5 bg-white rounded-full z-50 flex justify-center items-center ">
            <div className="w-3 h-3 bg-green-500 z-50 rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <p className="text-white">
            Ecosystem Expansion and Partnership <br /> (H1 2024):
            </p>
            <p className="text-zinc-500">
            Established strategic partnerships with merchants, government <br /> agencies, and financial institutions to expand E-Riyal's utility and <br /> reach. Security Auditing started
            </p>
          </div>
        </div>
      </div>




     </div>




    </div>
  );
}
