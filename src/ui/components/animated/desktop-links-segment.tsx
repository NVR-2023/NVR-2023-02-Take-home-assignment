import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LinkWithHideableTag from "../common/link-with-hideable-tag";
import { LinksSegmentProps } from "../../../types/global-types";

const DesktopLinksSegment = ({ desktopLinks, splitAfter }: LinksSegmentProps) => {
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
    <ul className="flex flex-col h-full justify-between">
      <div className="space-y-5">
        {desktopLinks.slice(0, splitAfter).map((link, index) => (
          <li key={`first-${index}`} className="relative flex items-center">
            {activeLink === link.url && link.url !== "/" && (
              <motion.div
                layoutId="currentPageIndicator"
                className="absolute -left-1 top-0 h-full border-[1.5px] border-r-[#6868f6]"
              />
            )}
            <LinkWithHideableTag Icon={link.Icon} text={link.text!} url={link.url} />
          </li>
        ))}
      </div>
      <div className="space-y-5">
        {desktopLinks.slice(splitAfter).map((link, index) => (
          <li key={`second-${index}`} className="relative flex items-center">
            {activeLink === link.url && link.url !== "/" && (
              <motion.div
                layoutId="currentPageIndicator"
                className="absolute -left-1 top-0 h-full border-[1.5px] border-r-[#6868f6]"
              />
            )}
            <LinkWithHideableTag Icon={link.Icon} text={link.text!} url={link.url} />
          </li>
        ))}
      </div>
    </ul>
  );
};

export default DesktopLinksSegment;
