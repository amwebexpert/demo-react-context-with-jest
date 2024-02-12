import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";
import { CounterProvider } from "../../src/context/counter-provider";

import * as useCounterContextModule from "../../src/context/use-counter-context";
import { CounterContextType } from "../../src/context/counter";
import { ThemeProvider } from "../../src/context/theme-provider";

jest.mock("../../src/screens/home/Home", () => ({
  __esModule: true,
  default: jest.fn(() => null), // jest.fn(implementation) is a shorthand for jest.fn().mockImplementation(implementation)
}));

describe("Header tests suite", () => {
  it("should display welcome message", () => {
    // arrange
    const expectedTitle = "Welcome to this Webapp Demo";

    // act
    render(<Header />);

    // assert
    expect(
      screen.getByRole("heading", { name: expectedTitle })
    ).toBeInTheDocument();
  });

  describe("when rendering the counter", () => {
    it("should display counter default value", () => {
      // arrange
      const expectedCounter = 0;
      const expectedCounterHeading = `Counter: ${expectedCounter}`;

      // act
      render(<Header />);

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
          <Header />
        </CounterProvider>
      );

      // assert
      expect(
        screen.getByRole("heading", { name: expectedCounterHeading })
      ).toBeInTheDocument();
    });

    it("should display counter provided value (without CounterProvider version)", () => {
      // arrange
      const expectedCounter = 77;
      const expectedCounterHeading = `Counter: ${expectedCounter}`;

      const counterContext: CounterContextType = {
        counter: expectedCounter,
        increment: jest.fn(),
        decrement: jest.fn(),
      };

      jest
        .spyOn(useCounterContextModule, "useCounterContext")
        .mockReturnValue(counterContext);

      // act
      render(<Header />);

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
      render(<Header />);

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
          <Header />
        </ThemeProvider>
      );

      // assert
      expect(
        screen.getByRole("heading", { name: expectedThemeHeading })
      ).toBeInTheDocument();
    });
  });
});
