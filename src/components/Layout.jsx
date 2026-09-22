import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
