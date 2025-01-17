import { motion } from "framer-motion";
import Footer from "../../sections/footer/footer";
import TransparentLogoIcon from "../../components/icons/transparent-logo-icon";
import SigninButton from "./sub-components/signin-button";

import {
  textLogoAnimation,
  backgroundAnimation,
  buttonAnimation,
} from "../../animations/homepage-animations";

const Homepage = () => {
  return (
    <>
      <motion.div key="homepage" className="relative h-screen" {...backgroundAnimation}>
        <img
          src="/images/homepage-wallpaper.webp"
          className="w-full h-full object-cover"
          alt="Homepage Wallpaper"
        />
        <motion.div className="absolute bottom-25 right-7 -space-y-3.5" {...textLogoAnimation}>
          <TransparentLogoIcon scale={1.5} color="#d4d4d8" />
          <div className="text-zinc-300 -tracking-tight text-[3.5rem]">TechBilling Portal</div>
        </motion.div>
        <motion.div className="absolute right-8 bottom-18" {...buttonAnimation}>
          <SigninButton />
        </motion.div>
      </motion.div>
      <footer>
        <Footer color="homepage" />
      </footer>
    </>
  );
};

export default Homepage;
