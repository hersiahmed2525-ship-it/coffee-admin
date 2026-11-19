import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ShopPage from "../../pages/ShopPage";

vi.mock("../../hooks/useProducts", () => ({
  useProducts: () => ({
    loading: false,
    error: null,
    products: [
      {
        id: 1,
        name: "Vanilla Bean",
        description: "Nutty",
        origin: "Colombia",
        price: 10,
      },
      {
        id: 2,
        name: "House Blend",
        description: "Rich",
        origin: "Vietnam",
        price: 12,
      },
    ],
  }),
}));

test("filters products by search query", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <ShopPage />
    </MemoryRouter>
  );

  expect(screen.getByText("Vanilla Bean")).toBeInTheDocument();
  expect(screen.getByText("House Blend")).toBeInTheDocument();

  await user.type(screen.getByLabelText(/search products/i), "vanilla");

  expect(screen.getByText("Vanilla Bean")).toBeInTheDocument();
  expect(screen.queryByText("House Blend")).not.toBeInTheDocument();
});
