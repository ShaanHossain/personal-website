export type CommandOutput =
  | { type: "text"; data: string }
  | { type: "formatted"; data: string; style?: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "json"; data: object }
  | { type: "tree"; data: string }
  | { type: "interactive"; data: string };
