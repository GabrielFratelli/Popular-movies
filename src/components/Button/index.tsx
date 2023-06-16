import React from "react";
import classNames from "classnames";
import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

export function Button({ name, className }: ButtonProps) {
  const inspectClassName = classNames("Button", className);
  return (
    <ButtonComponent type="button" className={inspectClassName}>
      {name}
    </ButtonComponent>
  );
}
