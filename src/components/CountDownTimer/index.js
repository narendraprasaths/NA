"use client";

import React, { useEffect, useState } from "react";
import TimerSection from "@/components/CountDownTimer/TimerSection";
import { getTimerDetails } from "@/utils";

const CountDownTimer = (props) => {
  const today = new Date();
  const weedingDate = new Date(2024, 1, 0, 0, 0, 0, 0);

  const [counter, setCounter] = useState(getTimerDetails(today, weedingDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(getTimerDetails(new Date(), weedingDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <TimerSection number={counter.w} range="WEEKS" />
      <TimerSection number={counter.d} range="DAYS" />
      <TimerSection number={counter.h} range="HOURS" />
      <TimerSection number={counter.m} range="MINS" />
      <TimerSection number={counter.s} range="SECS" />
    </div>
  );
};

export default CountDownTimer;
