import React from "react";
import { AxiosResponse } from "axios";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import * as submitGameValueApi from "../../api/submitGameValue";

import Main from "./Main";

let submitGameValueMock: any;
const successResponse: submitGameValueApi.GameValueResponse = {
  result: "Fizz",
};

beforeEach(() => {
  submitGameValueMock = jest
    .spyOn(submitGameValueApi, "submitGameValue")
    .mockReturnValue(
      new Promise((resolve, _) =>
        resolve({
          data: successResponse,
        } as AxiosResponse),
      ),
    );
});

afterEach(() => {
  submitGameValueMock.mockRestore();
});

describe("Main component tests", () => {
  it("should renders correctly", () => {
    render(<Main />);
    expect(screen.getByTestId("main")).toBeInTheDocument();
    expect(screen.getByTestId("main-form")).toBeInTheDocument();
    expect(screen.getByTestId("main-input")).toBeInTheDocument();
    expect(screen.getByTestId("main-submit-button")).toBeInTheDocument();
  });

  it("should hide input error on input focus", () => {
    render(<Main />);
    const inputElement = screen.getByTestId("main-input");
    expect(inputElement).toBeInTheDocument();
    const buttonElement = screen.getByTestId("main-submit-button");
    expect(buttonElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "Invalid value" } });
    fireEvent.submit(screen.getByTestId("main-form"));
    expect(screen.getByTestId("input-container").childNodes.length).toBe(2);
    fireEvent.focus(inputElement);
    expect(screen.getByTestId("input-container").childNodes.length).toBe(1);
  });

  it("should send request when game value passed and form submitted", async () => {
    const testGameValue = "3";
    render(<Main />);
    const inputElement = screen.getByTestId("main-input");
    expect(inputElement).toBeInTheDocument();
    const buttonElement = screen.getByTestId("main-submit-button");
    expect(buttonElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: testGameValue } });
    fireEvent.submit(screen.getByTestId("main-form"));
    expect(submitGameValueMock).toHaveBeenCalledTimes(1);
    expect(submitGameValueMock).toHaveBeenCalledWith({
      gameValue: parseInt(testGameValue),
    });
    await waitFor(
      () => {
        expect(screen.getByTestId("main-result")).toBeInTheDocument();
      },
      {
        timeout: 500,
      },
    );
    expect(screen.getByTestId("main-result")).toHaveTextContent(
      successResponse.result.toString(),
    );
  });
});
