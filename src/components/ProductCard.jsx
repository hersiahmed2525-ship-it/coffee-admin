import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <strong>Origin:</strong> {product.origin}
      </p>
      <p className="price">${Number(product.price).toFixed(2)}</p>
      <Link to={`/shop/${product.id}`}>View details</Link>
    </article>
  );
}
