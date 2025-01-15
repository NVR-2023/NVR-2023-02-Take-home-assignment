import LinksSegment from "./sub-components/links-segment";
import AccountSegment from "./sub-components/account-segment";

const Sidebar = () => {
  return (
    <nav className="w-9 pt-12 pb-4 px-2 flex flex-col justify-between overflow-x-clip duration-300 transition-all hover:w-30 min-h-full h-full rounded bg-zinc-200">
      <div>
        <LinksSegment />
      </div>
      <AccountSegment />
    </nav>
  );
};

export default Sidebar;
