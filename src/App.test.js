import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");
  
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
});
