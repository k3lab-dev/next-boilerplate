import Home from "@/pages";
import { render, screen } from "@testing-library/react";
import React from "react";

beforeEach(() => {
  render(<Home />);
});

it("displays 'Home'", () => {
  expect(screen.getByText("Home")).toBeInTheDocument();
});
