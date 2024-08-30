import React from "react";

interface Props extends React.ComponentProps<"button"> {
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (props: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { className, ...otherProps } = props;
    return (
      <button
        className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

export default Button;
