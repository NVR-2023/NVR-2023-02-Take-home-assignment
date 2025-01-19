import { ToolStripProps } from "../../../types/global-types";
import IconWIthSlidingLabel from "../animated/icon-with-sliding-label";
import ToolStripLabel from "./tool-strip-label";

const ToolsStrip = ({ title, tools, labels }: ToolStripProps) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="hidden md:flex">
        <ToolStripLabel label={title} />
      </span>

      <ul className="space-x-3 md:space-x-[2.5px] flex ">
        {tools.map((Tool, index) => (
          <li key={index} className="">
            <IconWIthSlidingLabel label={labels[index]} Icon={Tool} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsStrip;
