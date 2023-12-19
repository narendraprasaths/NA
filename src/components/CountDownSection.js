import React from "react";
import CountDownTimer from "@/components/CountDownTimer";
import CountdownLeaf from "@/assets/countdown/countdown-leaf.svg";
import Image from "next/image";

const CountDownSection = (props) => {
  return (
    <div className="relative flex items-center justify-center my-10">
      <div className="absolute right-0 top-64">
        <Image
          src={CountdownLeaf}
          alt="Countdown Leaf"
          priority={true}
          className="h-[198px] lg:h-auto"
        />
      </div>
      <div className="bg-[url('/images/countdown/countdown-background.svg')] bg-cover	bg-no-repeat w-[90vw] lg:w-2/3 px-4 lg:px-20 py-10 lg:py-16 rounded-3xl">
        <div className="font-niconne text-[40px] lg:text-[60px] text-darkPink mb-10 lg:mb-20">
          Countdown to the
          <br />
          wedding!
        </div>
        <CountDownTimer />
      </div>
    </div>
  );
};

export default CountDownSection;
