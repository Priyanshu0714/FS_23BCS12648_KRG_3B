import { render, screen } from "@testing-library/react";
import Product from "./product";
import * as api from "../api/productApi";

jest.mock("../api/productApi");

test("renders Product", async () => {
  api.fetchProduct.mockResolvedValue({
    id: 1,
    name: "Phone",
    price: 2000,
  });

  render(<Product />);

  const productName = await screen.findByText("Phone");

  expect(productName).toBeInTheDocument();
});
