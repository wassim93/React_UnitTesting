import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component render", () => {
  test("Greeting render correctly without props", () => {
    render(<Greeting />);
    const el = screen.getByText(/greeting/i);
    expect(el).toBeInTheDocument();
  });
  test("Greeting render correctly with propos name", () => {
    render(<Greeting name="wassim" />);
    const el = screen.getByText(/greeting wassim/i);
    expect(el).toBeInTheDocument();
  });
});

/* to run only this test
test.only("Greeting render correctly with propos name", () => {
  render(<Greeting name="wassim" />);
  const el = screen.getByText(/greeting wassim/i);
  expect(el).toBeInTheDocument();
});
*/
/* to skip running this test
test.skip("Greeting render correctly with propos name", () => {
  render(<Greeting name="wassim" />);
  const el = screen.getByText(/greeting wassim/i);
  expect(el).toBeInTheDocument();
});*/
