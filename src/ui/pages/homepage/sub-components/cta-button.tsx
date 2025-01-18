import { motion } from "framer-motion";
import { buttonTapVariants } from "../../../animations/button-animations";
import { Link } from "react-router-dom";

const CTAButton = () => {
  return (
    <Link to="/private/dashboard" viewTransition>
      <motion.button
        {...buttonTapVariants}
        className="group tracking-wide overflow-clip font-[450] text-zinc-300 text-sm border-zinc-300 border-2 rounded-[7px] w-70 ">
        <div className="w-140 py-2 h-9 flex transition-transform duration-500 group-hover:translate-x-[-50%]">
          <div className="w-full flex justify-center items-center">
            <span>By Nuno Rodrigues, for Comudel</span>
            <span className="ml-1 scale-90 transform translate-y-0.5">➜</span>
          </div>
          <div className="w-full flex justify-center items-center text-xs">GO TO PORTAL</div>
        </div>
      </motion.button>
    </Link>
  );
};

export default CTAButton;
