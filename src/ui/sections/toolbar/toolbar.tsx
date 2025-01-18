import TitleSegment from "./sub-components/title-segment";
import { ToolbarProps } from "../../../types/global-types";

const Toolbar = ({ title, toolsArray }: ToolbarProps) => {
  return (
    <div className="w-full p-2 rounded md:h-8 bg-zinc-300 md:flex md:items-center md:justify-between">
      <div>
        <TitleSegment title={title} />
      </div>
      <ul className="mt-2 md:mt-0 md:flex space-y-5 md:space-y-0 md:space-x-4">
        {toolsArray.map((Tool, index) => (
          <li key={index}>
            <Tool />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toolbar;
