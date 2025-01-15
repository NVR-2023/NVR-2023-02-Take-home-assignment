import HomepageIcon from "../../../components/icons/homepage-icon";
import DashboardIcon from "../../../components/icons/dashboard-icon";
import ComplianceTrackerIcon from "../../../components/icons/complaince-tarcker-icon";
import InvoicerIcon from "../../../components/icons/invoicer-icon";
import LinkWithHideableTag from "../../../components/common/link-with-hideable-tag";

const LinksSegment = () => {
  return (
    <div className="flex flex-col">
      <LinkWithHideableTag Icon={HomepageIcon} text="Homepage" url="/" />
      <LinkWithHideableTag Icon={HomepageIcon} text="Dashboard" url="/dashboard" />
      <LinkWithHideableTag Icon={HomepageIcon} text="Tracker" url="/" />
      <LinkWithHideableTag Icon={InvoicerIcon} text="Invoicer" url="/invoicer" />


    </div>
  );
};

export default LinksSegment;
