import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Wishlist({ wishlist, toggleWishlist, cartCount, addToCart }) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="container" style={{ padding: "40px 0" }}>
        <h1 className="page-title">Your Wishlist ❤️</h1>

        {wishlist.length === 0 ? (
          <div className="empty-state">
            <p>No saved items yet!</p>
            <Link to="/products">
              <button>Browse Products</button>
            </Link>
          </div>
        ) : (
          <div className="products-grid">
            {wishlist.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <div className="card-buttons">
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => toggleWishlist(product)}
                  >
                    ✕ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;