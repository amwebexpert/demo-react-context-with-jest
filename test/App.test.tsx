import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../src/App";
import { CounterProvider } from "../src/app-context/counter-provider";
import { ThemeProvider } from "../src/app-context/theme-provider";

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

  describe("when rendering the counter", () => {
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

  describe("when rendering with the app theme", () => {
    it("should display theme default initial name", () => {
      // arrange
      const expectedTheme = "dark";
      const expectedThemeHeading = `Theme: ${expectedTheme}`;

      // act
      render(<App />);

      // assert
      expect(
        screen.getByRole("heading", { name: expectedThemeHeading })
      ).toBeInTheDocument();
    });

    it("should display theme provided name", () => {
      // arrange
      const expectedTheme = "light";
      const expectedThemeHeading = `Theme: ${expectedTheme}`;

      // act
      render(
        <ThemeProvider initialTheme="light">
          <App />
        </ThemeProvider>
      );

      // assert
      expect(
        screen.getByRole("heading", { name: expectedThemeHeading })
      ).toBeInTheDocument();
    });
  });
});
