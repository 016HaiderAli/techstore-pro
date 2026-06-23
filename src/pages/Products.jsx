import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Products({ addToCart, cartCount, toggleWishlist, wishlist }) {  // ← add cartCount
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="container" style={{ padding: "40px 0" }}>
        <h1 className="page-title">All Products</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="🔍 Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <p className="loading">Loading products...</p>
        ) : (
          <div className="products-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                // onAddToCart={() => {}} - Edited / replaced by the very next line
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isWishlisted={wishlist.some((item) => item.id === product.id)}   
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Products;