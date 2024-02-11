import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App tests suite", () => {
  it("should display welcome message", () => {
    // arrange
    const expectedTitle = "Welcome to this Webapp Demo";

    // act
    render(<App />);

    // assert
    expect(
      screen.getByRole("heading", { name: expectedTitle })
    ).toBeInTheDocument();
  });

  it("should display counter initial value", () => {
    // arrange
    const expectedCounter = "Counter: 0";

    // act
    render(<App />);

    // assert
    expect(
      screen.getByRole("heading", { name: expectedCounter })
    ).toBeInTheDocument();
  });
});
