import Command from "~/models/Command";
import type { CommandOutput } from "~/models/CommandOutput";

export class LsCommand extends Command {
  name = "ls";
  lastRenderedCommandOutput = undefined;

  execute(args: string[]): CommandOutput {
    return {
      type: "table",
      headers: [],
      rows: ["file1.txt", "file2.txt", "file3.txt"],
    };
  }
}
