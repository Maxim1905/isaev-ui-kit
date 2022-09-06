import React, { FC, ReactNode, MouseEvent } from "react";
import "./styles.css";

export interface ButtonProps {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  variant?: "contained" | "outlined" | "text";
  onClick?: (event?: MouseEvent) => void;
}

export const Button: FC<ButtonProps> = ({
  disabled = false,
  children,
  variant = "contained",
  className,
  onClick,
  ...props
}: ButtonProps) => (
  <button
    className={`root ${className}`}
    onClick={onClick && onClick}
    disabled={disabled}
    {...props}>
    {children}
  </button>
);
