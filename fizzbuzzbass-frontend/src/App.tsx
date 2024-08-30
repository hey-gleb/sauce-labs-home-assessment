import React, { useCallback, useRef, useState } from "react";

import Input from "./components/input/Input";

import { submitGameValue } from "./api/submitGameValue";

import "./App.css";

interface ErrorConfig {
  visible: boolean;
  message?: string;
}

const DEFAULT_INPUT_ERROR_CONFIG: ErrorConfig = {
  visible: false,
};

const App: React.FC = () => {
  const [inputErrorConfig, setInputErrorConfig] = useState<ErrorConfig>(
    DEFAULT_INPUT_ERROR_CONFIG,
  );
  const [result, setResult] = useState<number | string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const eraseInputError = useCallback(
    () => setInputErrorConfig(DEFAULT_INPUT_ERROR_CONFIG),
    [],
  );

  const validateInput = (): boolean => {
    const value = inputRef.current?.value?.trim();
    return value ? /^\d+$/.test(value) : false;
  };

  const onFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const gameValue = inputRef.current?.value?.trim();
      if (gameValue && validateInput()) {
        submitGameValue({ gameValue: parseInt(gameValue) })
          .then((response) => setResult(response.data.result))
          .catch((error) => {
            console.error(`Failed to submit the game value`, error);
          })
          .finally(() => eraseInputError());
        return;
      }
      setInputErrorConfig({
        visible: true,
        message: "Invalid value passed",
      });
    },
    [eraseInputError],
  );

  return (
    <div className="App">
      <h1>Fizz Buzz Bass game</h1>
      <h3>Enter some number value to proceed</h3>
      <form onSubmit={onFormSubmit}>
        <Input
          placeholder={"Some number value"}
          ref={inputRef}
          onFocus={eraseInputError}
          errorConfig={inputErrorConfig}
        />
        <button type={"submit"}>Submit</button>
      </form>
      {result && (
        <>
          <h3>Result</h3>
          <p>{result}</p>
        </>
      )}
    </div>
  );
};

export default App;
