import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/"
import Home from "../app/page";

describe("rendering", () => {
  it("Should render Hello text", () => {
    render(<Home />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
