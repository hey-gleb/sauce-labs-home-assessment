import React, { useCallback, useRef, useState } from "react";

import Input from "./components/input/Input";

import { submitGameValue } from "./api/submitGameValue";

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
    <section className="px-4 px- mx-auto max-w-lg max-w-l justify-center m-10">
      <div className="p-5 flex border border-blue-200 flex-col rounded-2xl shadow-2xl w-[450px] h-[280px]">
        <div className={"text-center"}>
          <h1 className={"text-2xl font-bold text-gray-900 mb-1"}>
            Fizz Buzz Bass game
          </h1>
          <h3 className={"text-m font-medium text-gray-500"}>
            Enter some number value to proceed
          </h3>
        </div>
        <form
          className={"h-full rounded px-8 pt-6 pb-8"}
          onSubmit={onFormSubmit}
        >
          <div
            className={
              "mb-[25px] flex border-b border-blue-500 py-2 justify-between items-start"
            }
          >
            <Input
              className={"w-full mr-[30px]"}
              placeholder={"Some number value"}
              ref={inputRef}
              onFocus={eraseInputError}
              errorConfig={inputErrorConfig}
            />
            <button
              className={
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              }
              type={"submit"}
            >
              Submit
            </button>
          </div>
          {result && (
            <div className={"text-center text-2xl font-medium text-gray-900"}>
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default App;
