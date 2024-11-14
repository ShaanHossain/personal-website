import type { MetaFunction } from "@vercel/remix";
import Home from "~/components/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "Shaan's website" },
    { name: "description", content: "Welcome to my jungle" },
  ];
};

export default function Index() {
  return <Home />;
}
