import LinksMobileSegment from "./sub-components/links-mobile-segment";

const MobileNavbar = () => {
  return (
    <nav role="navigation" className="w-full px-4 h-10 flex items-center bg-zinc-200 rounded">
    <LinksMobileSegment />
    </nav>
  );
};

export default MobileNavbar;
