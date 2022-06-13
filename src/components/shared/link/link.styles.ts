import styled from "styled-components";
import { ColorsType, LinkVariantsType } from "../../../styles/theme";

export const LinkStyled = styled.a<{
  variant: LinkVariantsType;
  typograph?: string;
  color?: ColorsType;
}>`
  ${({ theme, variant }) => theme.variants["link"][variant]};

  font-size: ${({ typograph, theme }) =>
    theme["typograph"][typograph as string] || "inherit"};
  color: ${({ color, theme }) => theme["colors"][color as ColorsType]};
`;

LinkStyled.defaultProps = {
  color: "green-700",
};
