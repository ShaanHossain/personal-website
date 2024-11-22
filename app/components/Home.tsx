import PathDisplayLine from "~/components/PathDisplayLine";
import SvgChevronRight24 from "~/components/icons/ChevronRight24";

export default function Home() {
  return (
    <div className="bg-black flex-col items-start justify-start min-h-screen">
      <PathDisplayLine />
      <SvgChevronRight24 className="text-4xl text-green-400 font-meslo" />
    </div>
  );
}
