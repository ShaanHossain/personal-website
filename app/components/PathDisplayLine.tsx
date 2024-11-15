import TerminalText from "~/components/TerminalText";

export default function PathDisplayLine() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="m-4">
        <TerminalText>~</TerminalText>
      </div>
      <div className="m-4 items-end">
        <TerminalText>at 09:41:20 AM</TerminalText>
      </div>
      <span className="material-icons">face</span>
    </div>
  );
}
