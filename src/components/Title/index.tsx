import React from "react";
import classNames from "classnames";

import { TitleProps } from "./types";

export function Title({ children, className }: TitleProps) {
  const inspectClassName = classNames("Title", className);

  return <h1 className={inspectClassName}>{children}</h1>;
}
