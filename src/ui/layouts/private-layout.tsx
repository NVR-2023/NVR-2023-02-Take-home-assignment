import { Outlet } from "react-router-dom";
import Sidebar from "../sections/sidebar/sidebar";
import MobileNavbar from "../sections/mobile-navbar/mobile-navbar";
import Footer from "../sections/footer/footer";

const PrivateLayout = () => {
  return (
    <div className="private-layout overflow-x-hidden min-w-[320px] min-h-[480px] sm:min-w-[640px] sm:min-h-[640px] md:min-w-[768px] md:min-h-[768px] lg:min-w-[1024px] lg:min-h-[1024px]">
      <div className="p-4 flex flex-row gap-2 max-h-screen h-screen bg-zinc-100">
        <aside className="overflow-y-hidden hidden md:block h-full" role="navigation">
          <Sidebar />
        </aside>
        <main className="overflow-y-hidden flex-grow h-full space-y-2" role="main">
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
