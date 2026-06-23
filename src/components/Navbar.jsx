import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>🛒 TechStore</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;