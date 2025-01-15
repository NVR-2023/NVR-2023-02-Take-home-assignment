import { Outlet } from "react-router-dom";
import Sidebar from "../sections/sidebar/sidebar";
import MobileNavbar from "../sections/mobile-navbar/mobile-navbar";
import Footer from "../sections/footer/footer";

const PrivateLayout = () => {
  return (
    <div className="private-layout overflow-x-hidden">
      <div className="p-4 flex flex-col lg:flex-row gap-4 max-h-screen h-screen bg-yellow-400">
        <aside
          className="border-4 border-blue-500 overflow-y-hidden hidden lg:block h-full"
          role="navigation">
          <Sidebar />
        </aside>
        <main className="border-4 border-blue-500 overflow-y-hidden flex-grow h-full" role="main">
          <div className="md:hidden" role="navigation">
            <MobileNavbar />
          </div>
          <Outlet />
        </main>
      </div>
      <footer className="w-screen" role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
};

export default PrivateLayout;
