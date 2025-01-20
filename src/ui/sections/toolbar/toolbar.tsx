import TitleSegment from "./sub-components/title-segment";
import { ToolbarProps } from "../../../types/global-types";

const Toolbar = ({ title, toolsArray }: ToolbarProps) => {
  return (
    <div className="w-full p-2 rounded md:h-8 bg-zinc-300 md:flex md:items-center md:justify-between">
      <div>
        <TitleSegment title={title} />
      </div>
      <ul className="mt-5 md:mt-0 md:flex md:space-y-0 md:space-x-10">
        {toolsArray.map((ToolSegment, index) => (
          <li key={index}>
            <ToolSegment />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toolbar;
