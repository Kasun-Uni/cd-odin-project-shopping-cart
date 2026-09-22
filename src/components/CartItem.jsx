import { useCart } from "../context/CartContext.jsx";
import styles from "./CartItem.module.css";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  function handleIncrement() {
    updateQuantity(item.id, item.quantity + 1);
  }

  function handleDecrement() {
    updateQuantity(item.id, item.quantity - 1);
  }

  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.image} alt={item.title} />

      <div className={styles.details}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price.toFixed(2)} each</p>
      </div>

      <div className={styles.quantityRow}>
        <button type="button" onClick={handleDecrement} aria-label="Decrease quantity">
          −
        </button>
        <span className={styles.quantity}>{item.quantity}</span>
        <button type="button" onClick={handleIncrement} aria-label="Increase quantity">
          +
        </button>
      </div>

      <p className={styles.subtotal}>
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      <button
        type="button"
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
