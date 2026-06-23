import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <h2>🛒 TechStore</h2>
            <p>Your one-stop shop for everything tech. Quality products at unbeatable prices.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
          </div>

          <div className="footer-links">
            <h4>Account</h4>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <p>📧 support@techstore.com</p>
            <p>📞 +1 (800) 123-4567</p>
            <p>📍 123 Tech Street, Silicon Valley</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 TechStore Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;