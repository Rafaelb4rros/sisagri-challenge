import styled from "styled-components";
import { ButtonStyled } from "../shared/button/button.styles";

export const NavbarStyled = styled.nav`
  width: 100%;
  height: 100%;
  max-width: 100%;

  overflow-y: scroll;
`;

export const NavbarHeader = styled.header`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;

  img {
    max-width: 10.5rem;
  }
`;

export const NavbarFotter = styled.footer`
  padding: 1.875rem 0;
  font-size: 0.875rem;
  margin-top: auto;
`;

export const NavbarSection = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 0.5rem;
  border-top: solid 0.0625rem rgba(255, 255, 255, 0.2);
  border-bottom: solid 0.0625rem rgba(255, 255, 255, 0.2);

  padding-bottom: 4rem;
`;

export const NavbarIcon = styled.div`
  width: 1.875rem;
  height: 1.875rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarItem = styled.li`
  width: 100%;
  padding: 0.1rem 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  gap: 1rem;
  font-size: inherit;

  &:hover {
    background: ${({ theme }) => theme.colors["green-700"]};
    font-weight: 500;
  }

  transition: background 0.2s ease-in-out;

  ${ButtonStyled} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    &:hover {
      font-weight: 500;
    }
  }
`;
