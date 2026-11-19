import { useEffect, useId, useRef, useState } from "react";

const initialForm = { name: "", description: "", origin: "", price: "" };

export default function ProductForm({ onAdd }) {
  const nameId = useId();
  const descId = useId();
  const originId = useId();
  const priceId = useId();

  const firstInputRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (!form.name.trim() || !form.price) {
      setMessage("Name and price are required.");
      return;
    }

    try {
      await onAdd({
        name: form.name.trim(),
        description: form.description.trim(),
        origin: form.origin.trim(),
        price: Number(form.price),
      });
      setForm(initialForm);
      setMessage("Product added.");
      firstInputRef.current?.focus();
    } catch (err) {
      setMessage(err.message);
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        name="name"
        ref={firstInputRef}
        value={form.name}
        onChange={handleChange}
        placeholder="Type name"
      />

      <label htmlFor={descId}>Description</label>
      <input
        id={descId}
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Type description"
      />

      <label htmlFor={originId}>Origin</label>
      <input
        id={originId}
        name="origin"
        value={form.origin}
        onChange={handleChange}
        placeholder="Type origin"
      />

      <label htmlFor={priceId}>Price</label>
      <input
        id={priceId}
        name="price"
        type="number"
        min="0"
        step="0.01"
        value={form.price}
        onChange={handleChange}
        placeholder="Type price"
      />

      {message && <p className="form-message">{message}</p>}
      <button type="submit">Add Product</button>
    </form>
  );
}
