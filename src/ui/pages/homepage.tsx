import { Link } from "react-router-dom";
import Footer from "../sections/footer/footer";
import TransparentLogoIcon from "../components/icons/transparent-logo-icon";

const Homepage = () => {
  return (
    <>
      <div className="relative h-screen">
        <img
          src="/images/homepage-wallpaper.webp"
          className="w-full h-full object-cover"
          alt="Homepage Wallpaper"
        />
        <div className="absolute top-10 left-10">
          <TransparentLogoIcon scale={2} color="#312e81" />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;
