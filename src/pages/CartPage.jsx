import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import styles from "./CartPage.module.css";

function CartPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Your Cart</h1>
        <p>Your cart is empty. Go add something nice!</p>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>

      <div className={styles.itemList}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className={styles.totalRow}>
        <span>Total:</span>
        <span className={styles.totalAmount}>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartPage;
