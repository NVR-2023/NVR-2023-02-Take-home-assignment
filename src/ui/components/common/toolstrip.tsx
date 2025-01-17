import { StripProps } from "../../../types/global-types";

const ToolsStrip = ({ title, ToolsSegment }: StripProps) => {
  return (
    <div className="flex justify-between  items-center rounded">
      <div>{title}</div>
      <div>{ToolsSegment}</div>
    </div>
  );
};

export default ToolsStrip;
