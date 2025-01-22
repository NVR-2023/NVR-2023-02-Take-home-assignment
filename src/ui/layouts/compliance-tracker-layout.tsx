import ComplianceTree from "../pages/compliance-tracker/sub-components/complaince-tree";
import OverviewTracker from "../pages/compliance-tracker/sub-components/overview-tracker";

const ComplianceTrackerLayout = () => {
  return (
    <div className="flex w-full h-full gap-5">
      <ComplianceTree />
      <OverviewTracker />
    </div>
  );
};

export default ComplianceTrackerLayout;
