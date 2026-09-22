import useProducts from "../hooks/useProducts.js";
import ProductCard from "../components/ProductCard.jsx";
import styles from "./ShopPage.module.css";

function ShopPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong while loading products.</p>;

  function handleAddToCart(product, quantity) {
    console.log("Add to cart:", product.title, "x", quantity);
  }

  return (
    <div>
      <h1>Shop</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
