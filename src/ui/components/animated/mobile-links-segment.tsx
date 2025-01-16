/* import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DesktopLinkWithTag from "../common/link-with-tag";
import { LinksSegmentProps } from "../../../types/global-types";

const MobileLinksSegment = ({ links: desktopLinks, splitAfter }: LinksSegmentProps) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const activeLink = desktopLinks.find((desktopLink) => {
      if (desktopLink.url === "/") {
        return currentUrl === desktopLink.url;
      }
      return currentUrl.startsWith(desktopLink.url);
    });
    setActiveLink(activeLink ? activeLink.url : null);
  }, [currentUrl, desktopLinks]);

  return (
    <ul className="flex flex-row w-full justify-between">
      <div className="flex space-x-1">
        {desktopLinks.slice(0, splitAfter).map((link, index) => (
          <li key={`first-${index}`} className="relative flex items-center">
            {activeLink === link.url && link.url !== "/" && (
              <motion.div
                layoutId="currentPageIndicator"
                className="absolute -bottom-1 w-full border-[1.5px] border-b-[#6868f6]"
              />
            )}
            <DesktopLinkWithTag Icon={link.Icon} text={link.text!} url={link.url} />
          </li>
        ))}
      </div>
      <div className="flex space-x-1">
        {desktopLinks.slice(splitAfter).map((link, index) => (
          <li key={`second-${index}`} className="relative flex items-center">
            {activeLink === link.url && link.url !== "/" && (
              <motion.div
                layoutId="currentPageIndicator"
                className="absolute -bottom-1 w-full border-[1.5px] border-b-[#6868f6]"
              />
            )}
            <DesktopLinkWithTag Icon={link.Icon} text={link.text!} url={link.url} />
          </li>
        ))}
      </div>
    </ul>
  );
};

export default MobileLinksSegment;
 */