import { Link } from "react-router";
import { useCart } from "../context/CartContext.jsx";
import styles from "./Navbar.module.css";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className={styles.cartLink}>
            Cart
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
