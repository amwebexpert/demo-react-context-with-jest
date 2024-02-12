import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import App from "../src/App";
import Home from "../src/screens/home/Home";

jest.mock("../src/screens/home/Home", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe("App tests suite", () => {
  it("should render Home component", () => {
    // arrange

    // act
    render(<App />);

    // assert
    expect(Home as jest.Mock).toHaveBeenCalledWith(
      { userName: "John Smith" },
      {}
    );
  });
});
