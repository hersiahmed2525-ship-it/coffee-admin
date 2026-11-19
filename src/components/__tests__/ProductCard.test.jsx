import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard";

test("renders product information", () => {
  const product = {
    id: 1,
    name: "House Blend",
    description: "Dark roast",
    origin: "Vietnam",
    price: 12,
  };

  render(
    <MemoryRouter>
      <ProductCard product={product} />
    </MemoryRouter>
  );

  expect(screen.getByText("House Blend")).toBeInTheDocument();
  expect(screen.getByText(/Vietnam/)).toBeInTheDocument();
  expect(screen.getByText("$12.00")).toBeInTheDocument();
});
