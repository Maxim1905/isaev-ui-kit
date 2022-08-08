import React, {FC, ReactElement, ReactNode} from "react";
import "./styles.css";

export interface ButtonProps {
  color: string;
  children: ReactNode;
  variant?: "small" | "large";
}

export const Button: FC<ButtonProps> = ({
  children,
  color,
  variant = "small",
  ...props
}: ButtonProps) => {
  const classes = ["root"];

  if (variant === "large") {
    classes.push("large");
  }

  return (
    <button className={classes.join(" ")} style={{color}} {...props}>
      {children}
    </button>
  );
};
