import styled from "styled-components";
import { ButtonVariantsType, ColorsType } from "../../../styles/theme";

export const ButtonStyled = styled.button<{
  variant: ButtonVariantsType;
  color: ColorsType;
}>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, variant }) => theme.variants["button"][variant]};
  color: ${({ theme, color }) => theme.colors[color]};
`;

ButtonStyled.defaultProps = {
  variant: "primary",
  color: "neutral-0",
};
