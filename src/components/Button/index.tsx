import React, { FC, ReactNode } from "react";
import "./styles.css";

export interface ButtonProps {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  disabled = false,
  children,
  variant = "contained",
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className="root"
      onClick={onClick && onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
