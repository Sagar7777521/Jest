import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("On event change test", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "abc" } });
  expect(input.value).toBe("atest");
});
