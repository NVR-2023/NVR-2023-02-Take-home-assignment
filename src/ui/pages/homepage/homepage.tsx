import Footer from "../../sections/footer/footer";
import TransparentLogoIcon from "../../components/icons/transparent-logo-icon";
import SigninButton from "./sub-components/signin-button";
const Homepage = () => {
  return (
    <>
      <div className="relative h-screen">
        <img
          src="/images/homepage-wallpaper.webp"
          className="w-full h-full object-cover"
          alt="Homepage Wallpaper"
        />
        <div className="absolute bottom-25 right-7 -space-y-3.5">
          <TransparentLogoIcon scale={1.5} color="#d4d4d8" />
          <div className="text-zinc-300 -tracking-tight text-[3.5rem]">TechBilling Portal</div>
        </div>
        <div className="absolute right-8 bottom-18">
          <SigninButton />
        </div>
      </div>
      <footer>
        <Footer className="bg-purple-950"/>
      </footer>
    </>
  );
};

export default Homepage;
