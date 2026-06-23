// Adding Contact route:
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
// Adding Products route:
import Products from "./pages/Products";
// Adding ProductDetails route:
import ProductDetails from "./pages/ProductDetails";
// Adding cart state - The cart needs to be shared between pages
import { useState } from "react";
import Cart from "./pages/Cart";
// Adding Wishlist state:
import Wishlist from "./pages/Wishlist";
// Adding Login and Register imports and routes:
import Login from "./pages/Login";
import Register from "./pages/Register";
// Adding Category route
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cartCount={cartCount} addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
        <Route path="/categories" element={<Categories cartCount={cartCount} />} />
        <Route path="/categories/:category" element={<CategoryProducts cartCount={cartCount} addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
        <Route path="/products" element={<Products addToCart={addToCart} cartCount={cartCount} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
        <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} cartCount={cartCount} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} cartCount={cartCount} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} cartCount={cartCount} addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact cartCount={cartCount} />} />
        <Route path="/login" element={<Login cartCount={cartCount} />} />
        <Route path="/register" element={<Register cartCount={cartCount} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;