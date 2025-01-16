import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MobileLink from "../common/mobile-link";
import { LinksSegmentProps } from "../../../types/global-types";

const MobileLinksSegment = ({ links, splitAfter }: LinksSegmentProps) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const activeLink = links.find((link) => {
      if (link.url === "/") {
        return currentUrl === link.url;
      }
      return currentUrl.startsWith(link.url);
    });
    setActiveLink(activeLink ? activeLink.url : null);
  }, [currentUrl, links]);

  return (
    <ul className="flex flex-row w-full justify-between">
      <div className="flex space-x-4">
        {links.slice(0, splitAfter).map((link, index) => (
          <li key={`first-${index}`} className="relative flex items-center">
            {activeLink === link.url && link.url !== "/" && (
              <motion.div
                layoutId="mobileCurrentPageIndicator"
                className="absolute -bottom-1 w-full border-[1.5px] border-t-[#6868f6]"
              />
            )}
            <MobileLink Icon={link.Icon} url={link.url} />
          </li>
        ))}
      </div>
      <div className="flex space-x-4">
        {links.slice(splitAfter).map((link, index) => (
          <li key={`second-${index}`} className="relative flex items-center">
            {activeLink === link.url && link.url !== "/" && (
              <motion.div
                layoutId="mobileCurrentPageIndicator"
                className="absolute -bottom-1 w-full border-[1.5px] border-t-[#6868f6]"
              />
            )}
            <MobileLink Icon={link.Icon} url={link.url} />
          </li>
        ))}
      </div>
    </ul>
  );
};

export default MobileLinksSegment;
