// When someone clicks "View Details" it should open a full page for that product.
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductDetails({ addToCart, cartCount }) {  // ← add cartCount
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="container">
        <div className="details-page">
          <div className="details-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="details-info">
            <p className="details-category">{product.category}</p>
            <h1>{product.title}</h1>
            <p className="details-price">${product.price}</p>
            <p className="details-desc">{product.description}</p>
            <div className="details-buttons">
              <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
              <button className="btn-outline" onClick={() => navigate(-1)}>
                ← Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;