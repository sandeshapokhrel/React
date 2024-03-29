import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This function will run when the component mounts (first appears on the screen)
    const intervalId = setInterval(() => {
      // This function will run every second
      setSeconds(prevSeconds => prevSeconds + 1); // Increment seconds by 1
    }, 1000); // Run every 1000 milliseconds (1 second)

    // This function will run when the component unmounts 
    return () => {
      clearInterval(intervalId); // Stop the interval when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <>
      <h1>Timer: {seconds} seconds</h1>
    </>
  );
}

export default Timer;
