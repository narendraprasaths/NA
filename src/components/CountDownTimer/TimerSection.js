import React from "react";

const TimerSection = (props) => {
  return (
    <div className="flex flex-col items-center justify-center font-libreBaskerville bg-white/60 backdrop-blur w-1/6 py-2 lg:py-6 rounded-lg">
      <div className="text-[22px] lg:text-[50px] font-bold">{props.number}</div>
      <div className="text-[8px] lg:text-[17px]">{props.range}</div>
    </div>
  );
};

export default TimerSection;
