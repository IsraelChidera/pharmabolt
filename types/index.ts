import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>    
}
