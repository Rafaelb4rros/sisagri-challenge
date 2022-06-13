import { ReactNode } from "react";
import { BoxStyled } from "./box.styles";
import { BoxProps } from "./box.types";

interface Props {
  children: ReactNode;
}

export const Box = ({ as, s, children, ...props }: Props & BoxProps) => {
  return (
    <BoxStyled as={as} style={s} {...props}>
      {children}
    </BoxStyled>
  );
};
