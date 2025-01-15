import HomepageIcon from "../../../components/icons/homepage-icon";
import DashboardIcon from "../../../components/icons/dashboard-icon";
import ComplianceTrackerIcon from "../../../components/icons/complaince-tarcker-icon";
import InvoicerIcon from "../../../components/icons/invoicer-icon";

const LinksSegment = () => {
  return (
    <div className="flex flex-col">
      <HomepageIcon scale={0.75} color="#3f3f46" />
      <DashboardIcon scale={0.75} color="#3f3f46" />
      <ComplianceTrackerIcon scale={0.75} color="#3f3f46" />
      <InvoicerIcon scale={0.75} color="#3f3f46" />
    </div>
  );
};

export default LinksSegment;
