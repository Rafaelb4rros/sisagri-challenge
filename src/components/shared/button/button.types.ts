import { ButtonHTMLAttributes } from "react";
import { ButtonVariantsType, ColorsType } from "../../../styles/theme";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  error?: any;
  variant?: ButtonVariantsType;
  color?: ColorsType;
};
