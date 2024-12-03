import PathDisplayLine from "~/components/PathDisplayLine";
import TerminalInput from "~/components/TerminalInput";
import React, { useState } from "react";
import type Command from "~/models/Command";
import { LsCommand } from "~/models/LsCommand";
import TerminalText from "~/components/TerminalText";
import PreviousCommand from "~/components/PreviousCommand";

export default function Home() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<Command[]>([]);
  const [refreshKey, setRefreshKey] = useState(0); // Key to trigger time refresh

  // Disable arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault(); // Prevent default arrow key behavior
    }
    if (e.key === "Enter") {
      console.log("Enter");
      if (input === "asd") {
        const cmd = new LsCommand();
        cmd.render([]);
        setLog((prevLog) => [...prevLog, cmd]);
      } else {
        console.log("invalid command");
      }
      setInput("");
      setRefreshKey((prevKey) => prevKey + 1); // Increment refresh key
    }
  };

  return (
    <div className="bg-black flex-col items-start justify-start min-h-screen">
      {/* Render the log */}
      <div className="log">
        {log.map((entry, index) => (
          <div key={index}>
            <div className="flex items-center">
              <PreviousCommand children={"asd"} color={"text-red-500"} />
            </div>
            <div className="ml-3">
              <TerminalText
                children={"zsh: command not found: asd"}
                color={"text-terminalCyan"}
              />
            </div>
          </div>
        ))}
      </div>
      <PathDisplayLine refreshKey={refreshKey} />
      <TerminalInput
        input={input}
        setInput={setInput}
        handleKeyDown={handleKeyDown}
      />
    </div>
  );
}
