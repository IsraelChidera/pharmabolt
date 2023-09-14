import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  className?: string;
  type?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SecondaryButtonProps {
  title: any;
  className?: string;
  style?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FormLoginValues {
  email: string;
  password: string;
}

export interface FormSignupValues{
  fullName: string;  
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormLoginErrors {
  email?: string;
  password?: string;
}

export interface FormSignupErrors {
  fullName?: string;   
  email?: string;
  password?: string;
  confirmPassword?: string;
}
