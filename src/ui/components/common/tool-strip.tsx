import { ToolStripProps } from "../../../types/global-types";
import IconWIthSLidingLabel from "../animated/icon-with-sliding-label";

const ToolsStrip = ({ title, tools }: ToolStripProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="font-[500] h-4.5 bg-red-400 flex items-baseline text-zinc-700 tracking-wide text-sm">
        {title}
      </div>

      <ul className="space-x-3 md:space-x-[2.5px] flex ">
        {tools.map((Tool, index) => (
          <li key={index} className="">
            <IconWIthSLidingLabel label="label1" Icon={Tool} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsStrip;
