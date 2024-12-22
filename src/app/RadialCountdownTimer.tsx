"use client";
import React, { useState, useEffect } from "react";

interface RadialCountdownTimerProps {
  totalSeconds: number;
  title: string;
  onFinish: () => void;
}

const RadialCountdownTimer = (props: RadialCountdownTimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(props.totalSeconds);

  useEffect(() => {
    if (secondsLeft === 0) {
      props.onFinish();
    }
  }, [secondsLeft, props]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [props]);

  const percentage = (secondsLeft / props.totalSeconds) * 100;

  return (
    <div className="flex flex-col items-center">
      <div
        className="radial-progress text-secondary"
        style={{
          "--value": percentage,
          "--size": "20rem",
          "--thickness": "20px",
        }}
      >
        <span className="font-mono text-8xl">{secondsLeft}</span>
      </div>
      <p className="mt-4 text-center text-7xl">{props.title}</p>
    </div>
  );
};

export default RadialCountdownTimer;
