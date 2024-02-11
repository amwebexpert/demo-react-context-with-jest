import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import App from "../src/App";

describe("App tests suite", () => {
  it("should display", () => {
    // arrange

    // act
    render(<App />);

    // assert
    expect(true).toBeTruthy();
  });
});
