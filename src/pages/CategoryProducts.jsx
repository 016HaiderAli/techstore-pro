import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function CategoryProducts({ cartCount, addToCart, toggleWishlist, wishlist }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [category]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="container" style={{ padding: "60px 0" }}>
        <h1 className="page-title" style={{ textTransform: "capitalize" }}>
          {category}
        </h1>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
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

export default CategoryProducts;