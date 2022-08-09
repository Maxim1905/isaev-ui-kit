import React, {FC, ReactElement, ReactNode} from "react";
import "./styles.css";

export interface InputProps {
  color: string;
  children: ReactNode;
  variant?: "small" | "large";
}

export const Input: FC<InputProps> = ({
  children,
  color,
  variant = "small",
  ...props
}: InputProps) => {
  const classes = ["root"];

  if (variant === "large") {
    classes.push("large");
  }

  return (
    <input className={classes.join(" ")} style={{color}} {...props}>
      {children}
    </input>
  );
};
