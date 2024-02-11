import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../src/App";
import { CounterProvider } from "../src/app-context/counter-provider";

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

  it("should display counter default value", () => {
    // arrange
    const expectedCounter = 0;
    const expectedCounterHeading = `Counter: ${expectedCounter}`;

    // act
    render(<App />);

    // assert
    expect(
      screen.getByRole("heading", { name: expectedCounterHeading })
    ).toBeInTheDocument();
  });

  it("should display counter provided value", () => {
    // arrange
    const expectedCounter = 55;
    const expectedCounterHeading = `Counter: ${expectedCounter}`;

    // act
    render(
      <CounterProvider initialCounter={expectedCounter}>
        <App />
      </CounterProvider>
    );

    // assert
    expect(
      screen.getByRole("heading", { name: expectedCounterHeading })
    ).toBeInTheDocument();
  });
});
