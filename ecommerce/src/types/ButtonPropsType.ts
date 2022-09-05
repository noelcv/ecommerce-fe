import { MouseEvent } from "react";

export type ButtonPropsType = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; 
  className?: string;
  text?: string;
};
