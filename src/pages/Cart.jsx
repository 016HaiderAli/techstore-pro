import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Cart({ cart, removeFromCart, cartCount }) {  // ← add cartCount  

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="container" style={{ padding: "40px 0" }}>
        <h1 className="page-title">Your Cart 🛒</h1>

        {cart.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty!</p>
            <Link to="/products">
              <button>Browse Products</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p>${item.price} × {item.qty}</p>
                    <p className="price">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕ Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h2>Total: ${total.toFixed(2)}</h2>
              <button>Proceed to Checkout ✅</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;