import { ReactNode } from "react";
import {
  ColorsType,
  HeadingVariantsType,
  TextVariantsType,
} from "../../../styles/theme";

import { HeadingStyled, TextStyled } from "./text.styles";

interface Props {
  color?: ColorsType;
  children: ReactNode;
  as?: any;
}

function Heading({
  as,
  children,
  ...props
}: Props & {
  variant?: HeadingVariantsType;
}) {
  return (
    <HeadingStyled as={as} {...props}>
      {children}
    </HeadingStyled>
  );
}

function Text({
  children,
  as,
  ...props
}: Props & {
  variant: TextVariantsType;
}) {
  return <TextStyled {...props}>{children}</TextStyled>;
}

export { Heading, Text };
