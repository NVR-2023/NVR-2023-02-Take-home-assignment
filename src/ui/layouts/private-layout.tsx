import { Outlet } from "react-router-dom";
import Sidebar from "../sections/sidebar/sidebar";
import Footer from "../sections/footer/footer";

const PrivateLayout = () => {
  return (
    <div className="private-layout overflow-x-clip">
      <div className="p-4 flex flex-col lg:flex-row gap-4 max-h-screen bg-yellow-400">
        <aside className="overflow-y-hidden sm:hidden lg:block" role="navigation">
          <Sidebar />
        </aside>
        <main className="overflow-y-hidden flex-grow" role="main">
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
