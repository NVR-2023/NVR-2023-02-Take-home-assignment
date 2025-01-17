import { ToolStripProps } from "../../../types/global-types";

const ToolsStrip = ({ title, tools }: ToolStripProps) => {
  return (
    <div className="flex items-baseline rounded space-x-2">
      <div>{title}</div>
      <ul className="flex space-x-2">
        {tools.map((Tool, index) => (
          <li key={index}>
            <Tool />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsStrip;
