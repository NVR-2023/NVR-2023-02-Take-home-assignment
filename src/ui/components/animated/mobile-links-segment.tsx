import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MobileLink from "../common/mobile-link";
import { LinksSegmentProps } from "../../../types/global-types";

const LinkGroup = ({
  links,
  activeLink,
}: {
  links: LinksSegmentProps["links"];
  activeLink: string | null;
}) => (
  <div className="flex space-x-4">
    {links.map((link, index) => (
      <li key={`link-${index}`} className="relative flex items-center">
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
);

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
      <LinkGroup links={links.slice(0, splitAfter)} activeLink={activeLink} />
      <LinkGroup links={links.slice(splitAfter)} activeLink={activeLink} />
    </ul>
  );
};

export default MobileLinksSegment;
