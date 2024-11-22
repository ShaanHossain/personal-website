import TerminalText from "~/components/TerminalText";

export default function PathDisplayLine() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="mx-4 mt-2">
        <TerminalText>~</TerminalText>
      </div>
      <div className="mx-4 mt-2 items-end">
        <TerminalText>at 09:41:20 AM</TerminalText>
      </div>
    </div>
  );
}
