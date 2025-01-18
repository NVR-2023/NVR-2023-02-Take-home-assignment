import { Link } from "react-router-dom";

const CTAButton = () => {
  return (
    <Link to="/private/dashboard" viewTransition>
      <button className="group bg-yellow-300 overflow-hidden text-zinc-300 flex font-[450] px-3 py-2 border-2 rounded-[7px] border-zinc-300 text-[14px]">
        <div className="w-full flex items-center transition-transform duration-300">
          <div className="flex-grow bg-red-500 flex items-center transition-transform duration-300 group-hover:translate-x-[-100%]">
            <span>By Nuno Rodrigues, for comudel</span>
            <span className="ml-1 scale-90 transform translate-y-0.5">➜</span>
          </div>
          <div className="flex-grow bg-blue-400 flex items-center transition-transform duration-300 translate-x-full group-hover:translate-x-0">
            Go to Portal
          </div>
        </div>
      </button>
    </Link>
  );
};

export default CTAButton;
