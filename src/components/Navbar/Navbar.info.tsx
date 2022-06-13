import { CaretUp, CaretDown } from "phosphor-react";
import styled from "styled-components";
import { Box } from "../shared/box";
import { BoxStyled } from "../shared/box/box.styles";
import { Text } from "../shared/text";
import { TextStyled } from "../shared/text/text.styles";
import { NavbarItem } from "./navbar.styles";

const NavbarInfoWrapper = styled(NavbarItem)`
  background: ${({ theme }) => theme.colors["green-700"]};
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.625rem 0;
  position: relative;
  display: flex;
  align-items: center;

  ${TextStyled} {
    font-weight: 500;
    line-height: 1.225rem;
  }

  ${BoxStyled} {
    position: absolute;
    right: 0.6875rem;
    display: flex;
    flex-direction: column;

    svg {
      cursor: pointer;
    }
  }
`;

export function NavbarInfo() {
  return (
    <NavbarInfoWrapper as="div">
      <Text variant="sm" color="neutral-0">
        Lagos Agropecuaria LTDA
        <Text variant="xsm" color="transparent">
          12.345.678/0001-23
        </Text>
      </Text>
      <Box>
        <CaretUp size={11} weight="bold" />
        <CaretDown size={11} weight="bold" />
      </Box>
    </NavbarInfoWrapper>
  );
}
