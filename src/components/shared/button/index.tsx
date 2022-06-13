import { ButtonVariantsType, ColorsType } from "../../../styles/theme";
import { ButtonStyled } from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = ({
  variant,
  loading,
  color,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      color={color as ColorsType}
      variant={variant as ButtonVariantsType}
      {...props}
    >
      {loading ? "loading" : children}
    </ButtonStyled>
  );
};
