"use client";
import { useState } from "react";
import RadialCountdownTimer from "./RadialCountdownTimer";

export default function Home() {
  const [workout, setWorkout] = useState(10);
  const [rest, setRest] = useState(5);
  const [currentTimer, setCurrentTimer] = useState<"workout" | "rest">(
    "workout"
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {currentTimer === "workout" && (
        <RadialCountdownTimer
          totalSeconds={workout}
          title="Workout"
          onFinish={() => setCurrentTimer("rest")}
        />
      )}

      {currentTimer === "rest" && (
        <RadialCountdownTimer
          totalSeconds={rest}
          title="Rest"
          onFinish={() => setCurrentTimer("workout")}
        />
      )}
    </div>
  );
}
