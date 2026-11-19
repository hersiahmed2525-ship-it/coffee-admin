import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const { products, loading, error } = useProducts();
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState("All");

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error">{error}</p>;

  const origins = ["All", ...new Set(products.map((p) => p.origin))];

  const filtered = products.filter((product) => {
    const matchesSearch = [product.name, product.description, product.origin]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesOrigin = origin === "All" || product.origin === origin;
    return matchesSearch && matchesOrigin;
  });

  return (
    <div className="shop-layout">
      <aside className="sidebar">
        <input
          aria-label="Search products"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <h3>Origins</h3>
        {origins.map((item) => (
          <button
            key={item}
            className={origin === item ? "origin active-origin" : "origin"}
            onClick={() => setOrigin(item)}
          >
            {item}
          </button>
        ))}
      </aside>

      <section>
        <h1>Shop</h1>
        {filtered.length === 0 ? (
          <p>No products match your search.</p>
        ) : (
          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
