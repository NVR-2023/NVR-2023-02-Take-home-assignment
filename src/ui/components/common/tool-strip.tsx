import { ToolStripProps } from "../../../types/global-types";

const ToolsStrip = ({ title, tools }: ToolStripProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="font-[500] h-4.5 bg-red-400 flex items-baseline text-zinc-700 tracking-wide text-sm">
        {title}
      </div>

      <ul className="flex space-x-[1px] items-baseline">
        {tools.map((Tool, index) => (
          <li key={index} className="flex items-baseline">
            <Tool />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsStrip;
