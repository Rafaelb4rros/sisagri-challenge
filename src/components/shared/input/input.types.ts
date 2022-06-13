import { ElementType, InputHTMLAttributes } from "react";
import { InputVariantsType } from "../../../styles/theme";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: any;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  variant?: InputVariantsType;
};
