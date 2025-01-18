import { motion } from "framer-motion";
import { buttonTapVariants } from "../../../animations/button-animations";
import { Link } from "react-router-dom";

const CTAButton = () => {
  return (
    <Link to="/private/dashboard" viewTransition>
      <motion.button
        {...buttonTapVariants}
        className="group overflow-clip text-zinc-300 border-zinc-300 border-2 rounded w-70 ">
        <div className="w-140 py-2 h-9 flex transition-transform duration-500 group-hover:translate-x-[-50%]">
          <div className="w-full flex justify-center items-center">
            By Nuno Rodrigues, for Comubel
          </div>
          <div className="w-full flex justify-center items-center">Go to Portal</div>
        </div>
      </motion.button>
    </Link>
  );
};

export default CTAButton;
