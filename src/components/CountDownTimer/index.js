"use client";

import React from "react";
import { useTimer } from "react-timer-hook";
import TimerSection from "@/components/CountDownTimer/TimerSection";
import { weeksBetween } from "@/utils";

const CountDownTimer = (props) => {
  let weeks = weeksBetween(new Date(), new Date(2024, 2, 1));
  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: new Date("2024-02-01"),
    onExpire: () => console.warn("Expired"),
  });
  return (
    <div className="flex items-center justify-between">
      <TimerSection number={weeks} range="WEEKS" />
      <TimerSection number={days} range="DAYS" />
      <TimerSection number={hours} range="HOURS" />
      <TimerSection number={minutes} range="MINS" />
      <TimerSection number={seconds} range="SECS" />
    </div>
  );
};

export default CountDownTimer;
