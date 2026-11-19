import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar";

test("navigates between routes via NavBar", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
        <Route path="/admin" element={<h1>Admin Page</h1>} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Home Page")).toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: /shop/i }));
  expect(screen.getByText("Shop Page")).toBeInTheDocument();

  await user.click(screen.getByRole("link", { name: /admin portal/i }));
  expect(screen.getByText("Admin Page")).toBeInTheDocument();
});
