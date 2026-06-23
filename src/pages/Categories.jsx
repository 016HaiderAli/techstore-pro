import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categoryEmojis = {
  "electronics": "💻",
  "jewelery": "💍",
  "men's clothing": "👔",
  "women's clothing": "👗",
};

function Categories({ cartCount }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="container" style={{ padding: "60px 0" }}>
        <h1 className="page-title">Shop by Category</h1>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link to={`/categories/${cat}`} key={cat}>
              <div className="category-card">
                <span className="category-emoji">
                  {categoryEmojis[cat] || "🛍️"}
                </span>
                <h3>{cat}</h3>
                <p>Browse products →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Categories;