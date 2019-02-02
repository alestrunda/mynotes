import * as React from "react";
import classNames from "classnames";
import { checkPropTypes } from "prop-types";

type Props = {
  className?: string;
  children: React.ReactNode | string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
};

const Button: React.FC<Props> = ({
  className,
  children,
  onClick,
  primary,
  secondary,
  tertiary,
  ...restProps
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      {...restProps}
      className={classNames(
        "button",
        className,
        { "button--blue": primary },
        { "button--red": secondary },
        { "button--blue-light": tertiary }
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
