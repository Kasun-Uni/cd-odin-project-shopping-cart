import useProducts from "../hooks/useProducts.js";

function ShopPage() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Something went wrong while loading products.</p>;

  return (
    <div>
      <h1>Shop</h1>
      <p>{products.length} products found.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;
