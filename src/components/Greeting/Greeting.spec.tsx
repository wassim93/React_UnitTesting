import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting test from spec file", () => {
  it("Greeting render correctly without props", () => {
    render(<Greeting />);
    const el = screen.getByText(/greeting/i);
    expect(el).toBeInTheDocument();
  });
  it("Greeting render correctly with propos name", () => {
    render(<Greeting name="wassim" />);
    const el = screen.getByText(/greeting wassim/i);
    expect(el).toBeInTheDocument();
  });
});

/* to run only this test
fit("Greeting render correctly with propos name", () => {
  render(<Greeting name="wassim" />);
  const el = screen.getByText(/greeting wassim/i);
  expect(el).toBeInTheDocument();
});
*/
/* to skip running this test
xit("Greeting render correctly with propos name", () => {
  render(<Greeting name="wassim" />);
  const el = screen.getByText(/greeting wassim/i);
  expect(el).toBeInTheDocument();
});*/
