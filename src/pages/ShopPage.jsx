import useProducts from "../hooks/useProducts.js";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";
import styles from "./ShopPage.module.css";

function ShopPage() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <p className={styles.status}>Loading products...</p>;
  if (error) return <p className={styles.status}>Something went wrong while loading products.</p>;

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Shop</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
