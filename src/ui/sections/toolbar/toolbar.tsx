import TitleSegment from "./sub-components/title-segment";
import ToolsSegment from "./sub-components/tools-segment";
const Toolbar = () => {
  return (
    <div className="w-full px-2 rounded h-9 bg-zinc-300 flex items-center justify-between">
      <span>
        <TitleSegment title="Dashboard" />
      </span>
      <span>
        <ToolsSegment />
      </span>
    </div>
  );
};

export default Toolbar;
