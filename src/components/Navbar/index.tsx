import { ReactNode } from "react";

import {
  NavbarFotter,
  NavbarHeader,
  NavbarItem,
  NavbarSection,
  NavbarStyled,
  NavbarIcon,
} from "./navbar.styles";

interface Props {
  children: ReactNode;
}

function Header({ children }: Props) {
  return <NavbarHeader>{children}</NavbarHeader>;
}

function Section({ children }: Props) {
  return <NavbarSection>{children}</NavbarSection>;
}
function Icon({ children }: Props) {
  return <NavbarIcon>{children}</NavbarIcon>;
}

function Item({ children }: Props) {
  return <NavbarItem>{children}</NavbarItem>;
}

function Footer({ children }: Props) {
  return <NavbarFotter>{children}</NavbarFotter>;
}

function Navbar({ children }: Props) {
  return <NavbarStyled>{children}</NavbarStyled>;
}

Navbar.Footer = Footer;
Navbar.Header = Header;
Navbar.Section = Section;
Navbar.Item = Item;
Navbar.Icon = Icon;

export { Navbar };
