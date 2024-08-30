import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Input component tests", () => {
  it("should renders correctly", () => {
    render(<Input data-testid={"test-input"} />);
    expect(screen.getByTestId("test-input")).toBeInTheDocument();
  });

  it("should render error message when its visible", () => {
    const message = "Test error message";
    render(
      <Input
        data-testid={"test-input"}
        errorConfig={{ visible: true, message }}
      />,
    );
    expect(screen.getByTestId("test-input")).toBeInTheDocument();
    expect(screen.getByTestId("input-error-message")).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
