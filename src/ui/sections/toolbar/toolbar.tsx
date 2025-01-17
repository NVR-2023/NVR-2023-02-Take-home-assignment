import TitleSegment from "./sub-components/title-segment";
import { ToolBarProps } from "../../../types/global-types";

const Toolbar = ({ title, ToolsSegment }: ToolBarProps) => {
  return (
    <div className="w-full px-2 rounded h-9 bg-zinc-300 flex items-center justify-between">
      <span>
        <TitleSegment title={title} />
      </span>
      <span>{ToolsSegment}</span>
    </div>
  );
};

export default Toolbar;
