import SvgChevronRight24 from "~/components/icons/ChevronRight24";
import React from "react";
import TerminalText from "~/components/TerminalText";

export default function PreviousCommand({
  children,
  color = "text-green-400",
}: {
  children: string | string[];
  color?: string;
}) {
  return (
    <div>
      <div className="flex items-center">
        <SvgChevronRight24 className="mt-2 text-5xl text-green-400 font-meslo" />
        <div className={"mt-2"}>
          <TerminalText children={children} color={color} />
        </div>
      </div>
    </div>
  );
}
