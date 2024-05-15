import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(
      seconds
    )} : ${meridian}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden opacity-100"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800')",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="grid justify-items-center mt-48 ">
        <span className="font-bold text-white text-6xl font-mono justify-item-center ">
          {formatTime()}
        </span>
      </div>
    </div>
  );
}

export default DigitalClock;
