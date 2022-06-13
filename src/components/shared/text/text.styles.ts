import styled, { css } from "styled-components";
import {
  breakpoint,
  ColorsType,
  HeadingVariantsType,
  TextVariantsType,
} from "../../../styles/theme";

export const HeadingStyled = styled.h1<{
  variant?: HeadingVariantsType;
  color?: ColorsType;
}>`
  font-size: ${({ variant, theme }) =>
    theme.variants["heading"][variant as HeadingVariantsType]};
  color: ${({ color, theme }) => theme.colors[color as HeadingVariantsType]};
  font-weight: inherit;
`;

export const TextStyled = styled.p<{
  variant?: TextVariantsType;
  color?: ColorsType;
}>`
  font-size: ${({ variant, theme }) =>
    theme.variants["text"][variant as TextVariantsType]};
  color: ${({ color, theme }) => theme.colors[color as HeadingVariantsType]};

  font-weight: inherit;
`;
