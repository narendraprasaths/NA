import React from "react";
import CountDownTimer from "@/components/CountDownTimer";

const CountDownSection = (props) => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-[url('/images/countdown/countdown-background.svg')] bg-cover	bg-no-repeat w-[90vw] lg:w-2/3 px-4 lg:px-20 py-10 lg:py-16 rounded-3xl">
        <div className="font-niconne text-[40px] lg:text-[60px] text-darkPink mb-10 lg:mb-20">
          Countdown to the
          <br />
          wedding!
        </div>
        <div className="flex items-center justify-between">
          <CountDownTimer number={18} range="WEEKS" />
          <CountDownTimer number={18} range="DAYS" />
          <CountDownTimer number={18} range="HOURS" />
          <CountDownTimer number={18} range="MINS" />
          <CountDownTimer number={18} range="SECS" />
        </div>
      </div>
    </div>
  );
};

export default CountDownSection;
