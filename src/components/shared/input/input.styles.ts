import styled from "styled-components";
import { InputVariantsType } from "../../../styles/theme";
import { TextStyled } from "../text/text.styles";

const Input = styled.input<{ variant: InputVariantsType; error?: any }>`
  ${({ theme, variant }) => theme.variants["input"][variant]};

  border: ${({ error, theme }) =>
    error && `solid .0625rem ${theme.colors.danger}`};
  &:focus {
    outline: ${({ error, theme }) =>
      error && `solid .0625rem ${theme.colors.danger}`};
  }

  padding: 1rem 0.75rem 0.875rem 2.8125rem;
  border-radius: 0.625rem;
  width: 100%;

  font-size: 1rem;
  &::placeholder {
    line-height: normal;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  svg,
  button {
    position: absolute;
  }

  button {
    width: min-content;
    height: min-content;
    right: 1.5625rem;
  }
  position: relative;

  ${TextStyled} {
    position: absolute;
    left: 0.3125rem;
    bottom: 0.1875rem;

    &::before {
      content: "*";
    }
  }
`;

Input.defaultProps = {
  variant: "primary",
};

export { InputWrapper, Input };
