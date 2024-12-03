import React from "react";
import type { CommandOutput } from "~/models/CommandOutput";
import TableOutput from "~/components/commandOutputs/TableOutput";

abstract class Command {
  public abstract name: string;

  public abstract lastRenderedCommandOutput?: CommandOutput;

  abstract execute(args: string[]): CommandOutput;

  render(args: string[]): React.ReactNode {
    this.lastRenderedCommandOutput = this.execute(args);

    return <TableOutput />;
  }
}

export default Command;
