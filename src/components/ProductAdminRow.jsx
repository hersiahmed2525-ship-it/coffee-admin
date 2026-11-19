import { useState } from "react";

export default function ProductAdminRow({ product, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [price, setPrice] = useState(product.price);

  async function save() {
    await onUpdate(product.id, { price: Number(price) });
    setEditing(false);
  }

  function cancel() {
    setPrice(product.price);
    setEditing(false);
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.origin}</td>
      <td>
        {editing ? (
          <input
            aria-label={`price-${product.id}`}
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        ) : (
          `$${Number(product.price).toFixed(2)}`
        )}
      </td>
      <td>
        {editing ? (
          <>
            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditing(true)}>Edit Price</button>
        )}
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </td>
    </tr>
  );
}
