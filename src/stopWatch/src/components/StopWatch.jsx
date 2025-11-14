import React from "react";
import { FaFlag, FaPlay, FaRedo, FaStop } from "react-icons/fa";
import LapCard from "./LapCard";
import { formatTime } from "../helper";

const StopWatch = () => {
  const [timer, setTimer] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [startTime, setStartTime] = React.useState(0);

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(Date.now() - timer);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
    localStorage.removeItem("lapTime");
  };

  const handleLap = () => {
    const prevLap = [localStorage.getItem("lapTime")];
    localStorage.setItem("lapTime", [...prevLap, timer]);
  };
  const laps = localStorage.getItem("lapTime")
    ? localStorage.getItem("lapTime").split(",")
    : [];

  React.useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning, startTime]);

  return (
    <div className="">
      <h1 className="text-center my-4">{formatTime(timer)}</h1>
      <div className="flex justify-between">
        <button
          className={`text-green-500  ${
            isRunning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleStart}
          disabled={isRunning}
        >
          <FaPlay />
        </button>
        <button
          className={`text-red-500 ${
            !isRunning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleStop}
          disabled={!isRunning}
        >
          <FaStop />
        </button>
        <button
          className={`text-orange-500 ${
            !isRunning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleReset}
          disabled={!isRunning}
        >
          <FaRedo />
        </button>
        <button
          className={`text-blue-500 ${
            !isRunning ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleLap}
          disabled={!isRunning}
        >
          <FaFlag />
        </button>
      </div>
      {laps.length > 0 && (
        <div className="mt-4">
          <h2 className="text-center mb-2">Lap Times</h2>

          {laps.map((lap, index) => (
            <LapCard key={index} lap={Number(lap)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StopWatch;
