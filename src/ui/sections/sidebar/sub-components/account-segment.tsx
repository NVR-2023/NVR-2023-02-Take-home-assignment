import { useMemo } from "react";
import AccountIcon from "../../../components/icons/account-icon";
import SettingsIcon from "../../../components/icons/settings-icon";
import DesktopLinksSegment from "../../../components/animated/desktop-links-segment";

const AccountSegment = () => {
  const links = useMemo(
    () => [
      { Icon: SettingsIcon, text: "Settings", url: "/private/settings" },
      { Icon: AccountIcon, text: "Dashboard", url: "/private/account" },
    ],
    []
  );

  return <DesktopLinksSegment desktopLinks={links} />;
};

export default AccountSegment;
