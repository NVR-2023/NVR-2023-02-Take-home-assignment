import { Link } from "react-router-dom";
import TransparentLogoIcon from "../../../components/icons/transparent-logo-icon";

const HomepageNavbar = () => {
  return (
    <div className="w-full flex justify-between px-7 pt-9 text-zinc-700">
      <div className="flex items-center space-x-1">
        <span className="">
          <TransparentLogoIcon scale={0.75} />
        </span>
        <span className="font-[650] tex-xs tracking-wide ">TechBilling </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 font-[350] text-sm tracking-wide text-zinc-300">
        <Link
          to="/private/dashboard"
          className="w-18 flex justify-center items-center rounded border-transparent border-[1.5px] hover:border-zinc-300 p-[0.125rem] transition-all duration-500">
          Register
        </Link>
        <Link
          to="/private/dashboard"
          className="w-18 flex justify-center items-center rounded border-transparent border-[1.5px] hover:border-zinc-300 p-[0.125rem] transition-all duration-500">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default HomepageNavbar;
