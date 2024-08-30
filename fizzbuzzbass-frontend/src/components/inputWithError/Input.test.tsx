import { render, screen } from "@testing-library/react";

import InputWithError from "./InputWithError";

describe("InputWithError component tests", () => {
  it("should renders correctly", () => {
    render(<InputWithError data-testid={"test-inputWithError"} />);
    expect(screen.getByTestId("test-inputWithError")).toBeInTheDocument();
  });

  it("should render error message when its visible", () => {
    const message = "Test error message";
    render(
      <InputWithError
        data-testid={"test-inputWithError"}
        errorConfig={{ visible: true, message }}
      />,
    );
    expect(screen.getByTestId("test-inputWithError")).toBeInTheDocument();
    expect(
      screen.getByTestId("inputWithError-error-message"),
    ).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
