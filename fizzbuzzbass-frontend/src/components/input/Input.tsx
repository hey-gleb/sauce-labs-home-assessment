import React from "react";

interface ErrorConfig {
  visible: boolean;
  message?: string;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorConfig?: ErrorConfig;
}

const Input = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      className = "",
      errorConfig = { visible: false },
      ...otherProps
    } = props;

    return (
      <div className={className}>
        <input ref={ref} {...otherProps} />
        {errorConfig.visible && <p>{errorConfig?.message}</p>}
      </div>
    );
  },
);

export default Input;
