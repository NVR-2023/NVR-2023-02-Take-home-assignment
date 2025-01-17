import DropdownsSegment from "./dropdowns-segment";
import DashboardTogglesSegment from "./dashboard-toggles-segment";
const ToolsSegment = () => {
  return (
    <div className="flex space-x-2">
      <DropdownsSegment />
      <DashboardTogglesSegment />
    </div>
  );
};

export default ToolsSegment;
