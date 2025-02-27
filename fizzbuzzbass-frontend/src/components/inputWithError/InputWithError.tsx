import React from "react";

interface ErrorConfig {
  visible: boolean;
  message?: string;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorConfig?: ErrorConfig;
}

const InputWithError = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      className = "",
      errorConfig = { visible: false },
      ...otherProps
    } = props;

    const errorInputStyles = errorConfig.visible
      ? "text-red-500 bg-red-100"
      : null;

    return (
      <div
        className={`h-[70px] ${className}`}
        data-testid={"inputWithError-container"}
      >
        <input
          className={
            "block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:border-blue-500 " +
            errorInputStyles
          }
          ref={ref}
          {...otherProps}
        />
        {errorConfig.visible && (
          <p
            data-testid={"inputWithError-error-message"}
            className={"text-s mt-[5px] text-red-500"}
          >
            {errorConfig?.message}
          </p>
        )}
      </div>
    );
  },
);

export default InputWithError;
