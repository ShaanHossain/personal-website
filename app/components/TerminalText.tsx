export default function TerminalText({
  children,
  color = "text-green-400",
}: {
  children: string | string[];
  color?: string;
}) {
  return <p className={`text-4xl font-meslo ${color}`}>{children}</p>;
}
