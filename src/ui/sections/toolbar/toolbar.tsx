import TitleSegment from "./sub-components/title-segment";
import { ToolStripProps } from "../../../types/global-types";

const Toolbar = ({ title, Tools: ToolsSegment }: ToolStripProps) => {
  return (
    <div className="w-full px-2 rounded h-10 bg-zinc-300 flex items-center justify-between">
      <span>
        <TitleSegment title={title} />
      </span>
      <span>{ToolsSegment}</span>
    </div>
  );
};

export default Toolbar;
