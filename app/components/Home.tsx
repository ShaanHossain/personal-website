import PathDisplayLine from "~/components/PathDisplayLine";
import TerminalInput from "~/components/TerminalInput";
import React, { useState } from "react";
import PreviousCommand from "~/components/PreviousCommand";

export default function Home() {
  const [input, setInput] = useState("");

  // Disable arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault(); // Prevent default arrow key behavior
    }
    if (e.key === "Enter") {
      console.log("Enter");
      setInput("");
    }
  };

  return (
    <div className="bg-black flex-col items-start justify-start min-h-screen">
      <PreviousCommand />
      <PathDisplayLine />
      <TerminalInput
        input={input}
        setInput={setInput}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}
