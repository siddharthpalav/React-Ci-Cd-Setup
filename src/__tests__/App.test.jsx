import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest"; // Imported explicitly for clarity
import App from "../App";

test("renders Get Started heading", () => {
  render(<App />);
  // Updated to match the actual text in your App component
  const headerElement = screen.getByText(/get started/i);
  expect(headerElement).toBeInTheDocument();
});

test("increments count on button click", () => {
  render(<App />);
  // Using regular expression /i here handles the capital "C" automatically
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();

  // Click 1
  fireEvent.click(buttonElement);
  // Match using a regex or fix the capitalization to "Count is 1"
  expect(buttonElement).toHaveTextContent(/count is 1/i);

  // Click 2
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/count is 2/i);
});
