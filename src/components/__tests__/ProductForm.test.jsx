import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductForm from "../ProductForm";

test("submits a new product", async () => {
  const user = userEvent.setup();
  const onAdd = vi.fn().mockResolvedValue({});

  render(<ProductForm onAdd={onAdd} />);

  await user.type(screen.getByLabelText(/name/i), "Test Roast");
  await user.type(screen.getByLabelText(/description/i), "Test description");
  await user.type(screen.getByLabelText(/origin/i), "Kenya");
  await user.type(screen.getByLabelText(/price/i), "9.5");
  await user.click(screen.getByRole("button", { name: /add product/i }));

  expect(onAdd).toHaveBeenCalledWith({
    name: "Test Roast",
    description: "Test description",
    origin: "Kenya",
    price: 9.5,
  });
});
