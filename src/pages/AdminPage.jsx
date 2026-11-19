import ProductForm from "../components/ProductForm";
import ProductAdminRow from "../components/ProductAdminRow";
import { useProducts } from "../hooks/useProducts";

export default function AdminPage() {
  const { products, loading, error, addProduct, editProduct, removeProduct } =
    useProducts();

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-page">
      <h1>Admin Portal</h1>

      <div className="admin-grid">
        <ProductForm onAdd={addProduct} />

        <section>
          <h2>Products</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Origin</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ProductAdminRow
                    key={product.id}
                    product={product}
                    onUpdate={editProduct}
                    onDelete={removeProduct}
                  />
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
}
