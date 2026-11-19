import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  const product = products.find((p) => String(p.id) === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <article className="detail-card">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Origin:</strong> {product.origin}
      </p>
      <p>
        <strong>Price:</strong> ${Number(product.price).toFixed(2)}
      </p>
      <Link to="/shop">← Back to shop</Link>
    </article>
  );
}
