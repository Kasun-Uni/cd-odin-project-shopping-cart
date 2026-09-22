import useProducts from "../hooks/useProducts.js";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";
import styles from "./ShopPage.module.css";

function ShopPage() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong while loading products.</p>;

  return (
    <div>
      <h1>Shop</h1>
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
