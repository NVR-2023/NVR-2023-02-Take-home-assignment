import { useMemo } from "react";
import HomepageIcon from "../../../components/icons/homepage-icon";
import DashboardIcon from "../../../components/icons/dashboard-icon";
import ComplianceTrackerIcon from "../../../components/icons/complaince-tarcker-icon";
import InvoicerIcon from "../../../components/icons/invoicer-icon";
import SettingsIcon from "../../../components/icons/settings-icon";
import AccountIcon from "../../../components/icons/account-icon";
import MobileLinksSegment from "../../../components/animated/mobile-links-segment";

const LinksMobileSegment = () => {
  const links = useMemo(
    () => [
      { Icon: HomepageIcon, url: "/" },
      { Icon: DashboardIcon, url: "/private/dashboard" },
      { Icon: ComplianceTrackerIcon, url: "/private/compliance-tracker" },
      { Icon: InvoicerIcon, url: "/private/invoicer" },
      { Icon: SettingsIcon, url: "/private/settings" },
      { Icon: AccountIcon, url: "/private/account" },
    ],
    []
  );

  return <MobileLinksSegment links={links} splitAfter={4} />;
};

export default LinksMobileSegment;
