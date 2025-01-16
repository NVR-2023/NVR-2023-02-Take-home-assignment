import DropdownsSegment from "./dropdowns-segment";
import TogglesSegment from "./toggles-segment";
const ToolsSegment = () => {
  return (
    <div className="flex space-x-2">
      <DropdownsSegment />
      <TogglesSegment />
    </div>
  );
};

export default ToolsSegment;
