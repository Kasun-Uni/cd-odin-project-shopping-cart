import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.hero}>
      <h1>Welcome to the Shop</h1>
      <p>
        Browse our collection of great products, add your favorites to the
        cart, and check out (well, almost — this is a demo!).
      </p>

      <img
        className={styles.heroImage}
        src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Shopping bags"
      />

      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Fast Shipping</h3>
          <p>Get your items delivered quickly.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Great Prices</h3>
          <p>Quality products at fair prices.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Easy Returns</h3>
          <p>Not happy? Send it back, no hassle.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
