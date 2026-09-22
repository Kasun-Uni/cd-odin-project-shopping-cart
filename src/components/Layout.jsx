import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";

function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
