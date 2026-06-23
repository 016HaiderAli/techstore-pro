import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Home({ cartCount, addToCart, toggleWishlist, wishlist }) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <>
      <Navbar cartCount={cartCount} />

      {/* Hero */}
      <section className="hero">
        <h1>Modern Shopping Experience</h1>
        <p>Discover thousands of products at the best prices</p>
        <Link to="/products">
          <button className="hero-btn">Shop Now</button>
        </Link>
      </section>

      {/* Categories Banner */}
      <section className="container" style={{ padding: "60px 0 20px" }}>
        <h2 className="section-title">Shop by Category</h2>
        <div className="home-categories">
          {[
            { name: "electronics", emoji: "💻" },
            { name: "jewelery", emoji: "💍" },
            { name: "men's clothing", emoji: "👔" },
            { name: "women's clothing", emoji: "👗" },
          ].map((cat) => (
            <Link to={`/categories/${cat.name}`} key={cat.name}>
              <div className="home-category-card">
                <span>{cat.emoji}</span>
                <p>{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container" style={{ padding: "20px 0 60px" }}>
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              isWishlisted={wishlist.some((item) => item.id === product.id)}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link to="/products">
            <button>View All Products →</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;