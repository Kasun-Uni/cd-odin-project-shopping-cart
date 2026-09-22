import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleInputChange(e) {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  }

  function handleAddToCart() {
    onAddToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <div className={styles.quantityRow}>
        <button type="button" onClick={handleDecrement} aria-label="Decrease quantity">
          −
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleInputChange}
          className={styles.quantityInput}
        />
        <button type="button" onClick={handleIncrement} aria-label="Increase quantity">
          +
        </button>
      </div>

      <button type="button" className={styles.addButton} onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
