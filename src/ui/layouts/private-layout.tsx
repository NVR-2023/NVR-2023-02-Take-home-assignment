import { Outlet } from "react-router-dom";
import Sidebar from "../sections/sidebar/sidebar";
import Footer from "../sections/footer/footer";

const PrivateLayout = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-zinc-400 flex">
        <aside className="w-23 bg-red-400">
          <Sidebar />
        </aside>
        <main className="flex-grow bg-purple-400">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PrivateLayout;
