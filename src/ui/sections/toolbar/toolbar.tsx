import TitleSegment from "./sub-components/title-segment";
import { ToolbarProps } from "../../../types/global-types";

const Toolbar = ({ title, toolsSegment }: ToolbarProps) => {
  return (
    <div className="w-full px-2 rounded h-10 bg-zinc-300 flex items-center justify-between">
      <span>
        <TitleSegment title={title} />
      </span>
      <span>{toolsSegment}</span>
    </div>
  );
};

export default Toolbar;
