import React, {FC, ReactNode} from "react";
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
    <div className={classes.join(" ")} style={{color}} {...props}>
      {children}
    </div>
  );
};
