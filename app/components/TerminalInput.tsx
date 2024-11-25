import React from "react";
import SvgChevronRight24 from "~/components/icons/ChevronRight24";

export default function TerminalInput({
  input,
  setInput,
  handleKeyDown,
}: {
  input: string;
  setInput: (input: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center space-x-2">
      {/* Chevron Icon */}
      <SvgChevronRight24 className="text-5xl text-green-400 font-meslo" />

      {/* Input and Cursor */}
      <div className="flex items-center font-meslo">
        {/* User Input Text */}
        <div className="text-4xl text-green-400">{input}</div>

        {/* Blinking Cursor */}
        <div className="w-4 h-8 bg-green-400 animate-blink" />
      </div>

      {/* Hidden Input Field */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input state
        onKeyDown={handleKeyDown} // Disable arrow keys
        className="absolute top-0 left-0 w-full h-full text-transparent outline-none caret-transparent bg-transparent"
        spellCheck="false"
        autoFocus={true}
      />
    </div>
  );
}
