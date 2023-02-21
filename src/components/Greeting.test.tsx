import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("should render correctly", () => {
  render(<Greeting />);
  const el = screen.getByText("Greeting");
  expect(el).toBeInTheDocument();
});
