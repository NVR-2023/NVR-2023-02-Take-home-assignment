import Tree from "../pages/compliance-tracker/sub-components/tree";
import Overview from "../pages/compliance-tracker/sub-components/overview";

const ComplianceTrackerLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-5">
      <div className="h-full w-full md:w-2/3">
        <Tree />
      </div>
      <div className="h-full w-full md:w-1/3">
        <Overview />
      </div>
    </div>
  );
};

export default ComplianceTrackerLayout;
