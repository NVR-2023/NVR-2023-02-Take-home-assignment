import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DesktopLinkWithTag from "../common/desktop-link-with-tag";
import { LinksSegmentProps } from "../../../types/global-types";

const LinkGroup = ({
  links,
  activeLink,
}: {
  links: LinksSegmentProps["links"];
  activeLink: string | null;
}) => (
  <div className="space-y-5">
    {links.map((link, index) => (
      <li key={`link-${index}`} className="relative flex items-center">
        {activeLink === link.url && link.url !== "/" && (
          <motion.div
            layoutId="currentPageIndicator"
            className="absolute -left-1 top-0 h-full border-[1.5px] border-r-[#6868f6]"
          />
        )}
        <DesktopLinkWithTag Icon={link.Icon} text={link.text!} url={link.url} />
      </li>
    ))}
  </div>
);

const DesktopLinksSegment = ({ links: desktopLinks, splitAfter }: LinksSegmentProps) => {
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
      <LinkGroup links={desktopLinks.slice(0, splitAfter)} activeLink={activeLink} />
      <LinkGroup links={desktopLinks.slice(splitAfter)} activeLink={activeLink} />
    </ul>
  );
};

export default DesktopLinksSegment;
