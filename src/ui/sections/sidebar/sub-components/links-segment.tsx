import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccountIcon from "../../../components/icons/account-icon";
import HomepageIcon from "../../../components/icons/homepage-icon";
import DashboardIcon from "../../../components/icons/dashboard-icon";
import ComplianceTrackerIcon from "../../../components/icons/complaince-tarcker-icon";
import InvoicerIcon from "../../../components/icons/invoicer-icon";
import LinkWithHideableTag from "../../../components/common/link-with-hideable-tag";

const LinksSegment = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const links = useMemo(
    () => [
      { Icon: AccountIcon, text: "Admin", url: "/private/admin" },
      { Icon: DashboardIcon, text: "Dashboard", url: "/private/dashboard" },
      { Icon: ComplianceTrackerIcon, text: "Compliance", url: "/private/compliance-tracker" },
      { Icon: InvoicerIcon, text: "Invoicer", url: "/private/invoicer" },
      { Icon: HomepageIcon, text: "Homepage", url: "/" },
    ],
    []
  );

  useEffect(() => {
    const activeLink = links.find((link) => currentUrl.includes(link.url));
    setActiveLink(activeLink ? activeLink.url : null);
  }, [currentUrl, links]);

  return (
    <ul className="flex flex-col space-y-5">
      {links.map((link, index) => {
        const isActive = activeLink === link.url;

        return (
          <li key={index} className="relative flex items-center">
            {isActive && link.url !== "/" && (
              <div className="absolute -left-1 top-0 h-full border-[1.5px] border-r-[#6868f6]" />
            )}
            <LinkWithHideableTag Icon={link.Icon} text={link.text} url={link.url} />
          </li>
        );
      })}
    </ul>
  );
};

export default LinksSegment;
