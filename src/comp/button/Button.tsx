import React, { FC } from "react";
// import "./Button.scss";
import ClassName from "classnames";

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "primary" | "secondary" | "tertiary";
  colorType?: "positive" | "negative";
  size?: "large" | "medium" | "small" | "extra-small";
  disabled?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  block?: boolean;
}
const Button: FC<IProps> = ({
  children,
  color = "primary",
  size = "medium",
  colorType = "positive",
  block,
  leading,
  trailing,
  disabled,
  ...lastProps
}) => {
  return (
    <button
      {...lastProps}
      className={ClassName(
        "Button",
        "Button__size-" + size,
        "Button__color-" + colorType + "-" + color,
        { Button__block: block }
      )}
      disabled={disabled}
    >
      {leading && <div className="Button__leading">{leading}</div>}
      <div className="Button__txt">{children}</div>
      {trailing && <div className="Button__trailing">{trailing}</div>}
    </button>
  );
};

export { Button };
