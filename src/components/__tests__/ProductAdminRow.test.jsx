import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductAdminRow from "../ProductAdminRow";

const product = { id: 1, name: "Vanilla Bean", origin: "Colombia", price: 10 };

test("edits price and calls onUpdate", async () => {
  const user = userEvent.setup();
  const onUpdate = vi.fn().mockResolvedValue({});
  const onDelete = vi.fn();

  render(
    <table>
      <tbody>
        <ProductAdminRow
          product={product}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </tbody>
    </table>
  );

  await user.click(screen.getByRole("button", { name: /edit price/i }));
  const input = screen.getByLabelText(`price-${product.id}`);
  await user.clear(input);
  await user.type(input, "15");
  await user.click(screen.getByRole("button", { name: /save/i }));

  expect(onUpdate).toHaveBeenCalledWith(1, { price: 15 });
});

test("calls onDelete with product id", async () => {
  const user = userEvent.setup();
  const onUpdate = vi.fn();
  const onDelete = vi.fn();

  render(
    <table>
      <tbody>
        <ProductAdminRow
          product={product}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </tbody>
    </table>
  );

  await user.click(screen.getByRole("button", { name: /delete/i }));
  expect(onDelete).toHaveBeenCalledWith(1);
});
