import { useMemo } from "react";
import HomepageIcon from "../../../components/icons/homepage-icon";
import DashboardIcon from "../../../components/icons/dashboard-icon";
import ComplianceTrackerIcon from "../../../components/icons/complaince-tarcker-icon";
import InvoicerIcon from "../../../components/icons/invoicer-icon";
import SettingsIcon from "../../../components/icons/settings-icon";
import AccountIcon from "../../../components/icons/account-icon";

import DesktopLinksSegment from "../../../components/animated/desktop-links-segment";

const LinksSegment = () => {
  const links = useMemo(
    () => [
      { Icon: DashboardIcon, text: "Dashboard", url: "/private/dashboard" },
      { Icon: ComplianceTrackerIcon, text: "Compliance", url: "/private/compliance-tracker" },
      { Icon: InvoicerIcon, text: "Invoicer", url: "/private/invoicer" },
      { Icon: HomepageIcon, text: "Homepage", url: "/" },
      { Icon: SettingsIcon, text: "Settings", url: "/private/settings" },
      { Icon: AccountIcon, text: "Account", url: "/private/account" },
    ],
    []
  );

  return (
    <div className="h-full">
      <DesktopLinksSegment links={links} splitAfter={4} />
    </div>
  );
};

export default LinksSegment;
