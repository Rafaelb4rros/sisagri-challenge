import styled from "styled-components";
import { BoxProps } from "./box.types";

export const BoxStyled = styled.div<Pick<BoxProps, "bg">>`
  background: ${({ bg }) => bg};
`;

BoxStyled.defaultProps = {
  bg: "transparent",
};
