import { Outlet } from "react-router-dom";
import Sidebar from "../sections/sidebar/sidebar";
import MobileNavbar from "../sections/mobile-navbar/mobile-navbar";
import Footer from "../sections/footer/footer";

const PrivateLayout = () => {
  return (
    <div className="private-layout overflow-x-hidden">
      <div className="p-4 flex flex-col md:flex-row gap-2 max-h-screen h-screen bg-zinc-100">
        <aside
          className="overflow-clip hidden md:flex md:flex-col h-full max-h-full"
          role="navigation">
          <Sidebar />
        </aside>
        <main className="overflow-y-scroll md:overflow-y-clip space-y-2 w-full md:w-auto flex-grow h-full" role="main">
          <div className="md:hidden" role="navigation">
            <MobileNavbar />
          </div>
          <Outlet />
        </main>
      </div>
      <footer className="w-full" role="contentinfo">
        <Footer color="pages" />
      </footer>
    </div>
  );
};

export default PrivateLayout;
