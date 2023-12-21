import React from "react";
import Image from "next/image";
import LogoBlack from "../assets/logo/logo-black.svg";
import IntroLeaf from "../assets/intro/intro-leaf.svg";
import IntroHands from "../assets/intro/intro-hands.svg";

const IntroSection = () => {
  return (
    <div
      className="p-7 relative"
      style={{
        background:
          "linear-gradient(180deg, #EDF4F5 25.66%, rgba(237, 244, 245, 0.00) 195.83%)",
      }}
    >
      <div className="absolute top-1/4 lg:top-1/4 font-niconne text-[112px] lg:text-[260px] opacity-[0.02] origin-center	rotate-[-25.023deg]">
        Wedding
      </div>
      <div className="absolute top-1/3 left-[-120px] lg:left-[-10px]">
        <Image
          src={IntroLeaf}
          alt="Intro Leaf"
          priority={true}
          className="h-[198px] lg:h-auto"
        />
      </div>
      <div className="flex items-center justify-center mb-8 lg:mb-0">
        <Image
          src={LogoBlack}
          alt="Black Logo"
          priority={true}
          className="h-[74px] w-[74px] lg:h-[100px] lg:w-[100px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <div className="font-appleChancery text-[18px] lg:text-[30px] text-blackPearl">
            You’re invited to the wedding of
          </div>
          <div className="font-berkshireSwash text-[60px] lg:text-[100px] text-blackPearl">
            Narendra
          </div>
          <div className="font-berkshireSwash text-[34px] lg:text-[50px] text-blackPearl">
            &
          </div>
          <div className="font-berkshireSwash text-[60px] lg:text-[100px] text-blackPearl">
            Aarthi
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="font-appleChancery text-[18px] lg:text-[30px] text-blackPearl">
              Feb
            </div>
            <div className="border-r border-blackPearl h-10 lg:h-12" />
            <div className="font-appleChancery text-[44px] lg:text-[60px] text-blackPearl">
              01
            </div>
            <div className="border-r border-blackPearl h-10 lg:h-12" />
            <div className="font-appleChancery text-[18px] lg:text-[30px] text-blackPearl">
              2024
            </div>
          </div>
        </div>
        <div>
          <Image src={IntroHands} alt="Hand holding" priority={true} />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
