import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted }) {
  return (
    <div className="card">
      <button
        className="wishlist-btn"
        onClick={() => onToggleWishlist(product)}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <div className="card-buttons">
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        <Link to={`/products/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default ProductCard;