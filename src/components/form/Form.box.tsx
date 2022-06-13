import { FormHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { Box } from "../shared/box";
import { InputWrapper } from "../shared/input/input.styles";
import { HeadingStyled, TextStyled } from "../shared/text/text.styles";

interface Props {
  children: ReactNode;
}

const FormBox = styled.div`
  background: #ffffff;
  min-height: 36.0625rem;
  max-width: 26.125rem;
  width: 100%;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;

  ${HeadingStyled} {
    text-align: center;
    margin-bottom: 3.4375rem;
    font-weight: "500";
  }

  ${TextStyled} {
    margin-top: 1.625rem;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  ${InputWrapper} {
    padding-bottom: 1.5rem;
  }
`;

function FormWrapper({ children }: Props) {
  return <FormBox>{children}</FormBox>;
}

function Content({
  children,
  ...props
}: Props & FormHTMLAttributes<HTMLFormElement>) {
  return <Form {...props}>{children}</Form>;
}

function Header({ children }: Props) {
  return <Box as="header">{children}</Box>;
}

function Footer({ children }: Props) {
  return <Box as="footer">{children}</Box>;
}

FormWrapper.Content = Content;
FormWrapper.Header = Header;
FormWrapper.Footer = Footer;

export default FormWrapper;
