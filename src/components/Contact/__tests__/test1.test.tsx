import { test, expect, describe } from "vitest";
import ContactHeader from "../ContactHeader";
import { getByTestId, render } from "@testing-library/react";

describe.concurrent("Contact", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(3).toBe(3);
  });

  test("Subtract 1 + 2 to equal 3", () => {
    expect(3).toBe(3);
  });

  // Write test for react component specific html tag value
  test("ContactHeader component should have a div tag", () => {
    const { getByTestId, getByText } = render(<ContactHeader />);
    expect(getByText("Contact")).toBeInTheDocument();
  });
});
