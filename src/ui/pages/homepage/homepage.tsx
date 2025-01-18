import { motion } from "framer-motion";
import Footer from "../../sections/footer/footer";
import HomepageNavbar from "./sub-components/homepage-navbar";
import SigninButton from "./sub-components/signin-button";

import {
  textLogoAnimation,
  backgroundAnimation,
  buttonAnimation,
} from "../../animations/homepage-animations";

const Homepage = () => {
  return (
    <div>
      <motion.div className="relative h-screen" {...backgroundAnimation}>
        <img
          src="/images/homepage-wallpaper.webp"
          className="w-full h-full object-cover"
          alt="Homepage Wallpaper"
        />
        <div className="absolute inset-0 w-full ">
          <HomepageNavbar />
        </div>
        <motion.div className="absolute bottom-30 right-7 -space-y-3.5" {...textLogoAnimation}>
          <div className="text-zinc-300 -tracking-tight text-[3.5rem]">TechBilling Portal</div>
        </motion.div>
        <motion.div className="absolute right-8 bottom-19" {...buttonAnimation}>
          <SigninButton />
        </motion.div>
      </motion.div>
      <footer>
        <Footer color="homepage" />
      </footer>
    </div>
  );
};

export default Homepage;
