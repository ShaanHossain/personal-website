import SvgChevronRight24 from "~/components/icons/ChevronRight24";
import React from "react";
import TerminalText from "~/components/TerminalText";

export default function CommandNotFound() {
  return (
    <div>
      <div className="flex items-center">
        <SvgChevronRight24 className="mt-2 text-5xl text-green-400 font-meslo" />

        <div className="mt-2 flex items-center font-meslo text-4xl text-red-500">
          asdasd
        </div>
      </div>
      <div className="ml-3">
        <TerminalText
          children={"zsh: command not found: asdasd"}
          color={"text-terminalCyan"}
        />
      </div>
    </div>
  );
}
