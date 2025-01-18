import { Link } from "react-router-dom";
import TransparentLogoIcon from "../../../components/icons/transparent-logo-icon";

const HomepageNavbar = () => {
  return (
    <div className="w-full flex justify-between items-center text-base md:text-sm px-7 pt-9 text-zinc-700">
      <div className="flex space-x-1">
        <span className="">
          <TransparentLogoIcon scale={0.75} />
        </span>
        <span className="font-[650]  tracking-wide ">TechBilling </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 font-[350] tracking-wide text-zinc-300">
        <Link
          to="/private/dashboard"
          className="sm:w-12 md:w-18 flex justify-center rounded border-transparent border-[1.5px] hover:border-zinc-300 p-[0.125rem] transition-all duration-500">
          Register
        </Link>
        <Link
          to="/private/dashboard"
          className="sm:w-12 md:w-18 flex justify-center rounded border-transparent border-[1.5px] hover:border-zinc-300 p-[0.125rem] transition-all duration-500">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default HomepageNavbar;
