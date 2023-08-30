import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SecondaryButtonProps {
  title: string;
  className?: string;
  style?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
