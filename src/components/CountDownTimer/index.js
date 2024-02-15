"use client";

import React from "react";
import TimerSection from "@/components/CountDownTimer/TimerSection";

const CountDownTimer = (props) => {
  // const today = new Date();
  // const weedingDate = new Date(2024, 1, 0, 0, 0, 0, 0);

  // const [counter, setCounter] = useState(getTimerDetails(today, weedingDate));
  //
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(getTimerDetails(new Date(), weedingDate));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex items-center justify-between">
      <TimerSection number={0} range="WEEKS" />
      <TimerSection number={0} range="DAYS" />
      <TimerSection number={0} range="HOURS" />
      <TimerSection number={0} range="MINS" />
      <TimerSection number={0} range="SECS" />
    </div>
  );
};

export default CountDownTimer;
