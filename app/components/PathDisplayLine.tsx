import React, { useEffect, useState } from "react";
import TerminalText from "~/components/TerminalText";

export default function PathDisplayLine() {
  const [currentTime, setCurrentTime] = useState(""); // Holds the formatted current time

  useEffect(() => {
    // Get the current time when the component loads
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // 12-hour format with AM/PM
    });
    setCurrentTime(formattedTime); // Set the static time
  }, []); // Only run on component mount

  return (
    <div className="flex justify-between items-center w-full">
      <div className="mx-4 mt-2">
        <TerminalText>~</TerminalText>
      </div>
      <div className="mx-4 mt-2">
        <TerminalText>at {currentTime}</TerminalText>
      </div>
    </div>
  );
}
