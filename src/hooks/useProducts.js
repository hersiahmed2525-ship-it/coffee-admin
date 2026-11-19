import { useCallback, useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  async function addProduct(product) {
    const created = await createProduct(product);
    setProducts((prev) => [...prev, created]);
    return created;
  }

  async function editProduct(id, updates) {
    const updated = await updateProduct(id, updates);
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? updated : product))
    );
    return updated;
  }

  async function removeProduct(id) {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  return {
    products,
    loading,
    error,
    addProduct,
    editProduct,
    removeProduct,
    reload: loadProducts,
  };
}
