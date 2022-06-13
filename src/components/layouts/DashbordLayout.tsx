import { ReactNode, useCallback, useState } from "react";
import styled from "styled-components";
import { DashboardHeader } from "../DashboardHeader";
import { Navbar } from "../Navbar";
import { NavbarInfo } from "../Navbar/Navbar.info";
import { Button } from "../shared/button";
import { ButtonStyled } from "../shared/button/button.styles";
import { CustomLink } from "../shared/link";
import { SVG } from "../shared/SVG";
import { Layout } from "./PageLayout";

interface Props {
  children: ReactNode;
}

const DashboardWrapper = styled(Layout)`
  padding: 0;
  position: relative;
  color: #ffffff;
`;

const NavbarWrapper = styled.div<{ isNavbarExpanded: boolean }>`
  position: fixed;
  height: 100vh;
  width: ${({ isNavbarExpanded }) => (isNavbarExpanded ? "16rem" : "0")};
  transition: width 0.2s ease-in-out;
  left: 0;
  top: 0;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors["green-500"]};

  ${ButtonStyled} {
  }
`;

const navbarData = [
  {
    title: "Painel de controle",
    to: "#",
    icon: "pizza",
  },
  {
    title: "Propriedades",
    to: "#",
    icon: "propertie",
  },

  {
    title: "Cultivos",
    to: "#",
    icon: "apple",
  },

  {
    title: "Serviços",
    to: "#",
    icon: "serviceshovel",
  },

  {
    title: "Insumos",
    to: "#",
    icon: "cube",
  },
  {
    title: "Clientes",
    to: "#",
    icon: "persons",
  },
  {
    title: "Safras",
    to: "#",
    icon: "calendar",
  },
  {
    title: "Aplicações",
    to: "#",
    icon: "shovel",
  },

  {
    title: "Vendas",
    to: "#",
    icon: "marketcart",
  },

  {
    title: "Perdas",
    to: "#",
    icon: "trash",
  },
  {
    title: "Movimentos",
    to: "#",
    icon: "graphics",
  },
  {
    title: "Relátorios",
    to: "#",
    icon: "graph",
  },
  {
    title: "Estoque",
    to: "#",
    icon: "box",
  },
];

export function DashbordLayout({ children }: Props) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(true);

  const toggleNavbar = useCallback(() => {
    setIsNavbarExpanded(!isNavbarExpanded);
  }, [isNavbarExpanded]);

  return (
    <DashboardWrapper>
      <NavbarWrapper isNavbarExpanded={isNavbarExpanded}>
        <Navbar>
          <Navbar.Header>
            <img src="/logo.png" alt="sisagri logo" />
          </Navbar.Header>
          <Navbar.Section>
            <NavbarInfo />
            {navbarData.map(({ title, to, icon }) => {
              const Icon = SVG.getNavbarIco(icon);

              return (
                <CustomLink
                  key={title}
                  variant="unstyled"
                  color="neutral-0"
                  href={to}
                >
                  <Navbar.Item>
                    <Navbar.Icon>{Icon && <Icon />}</Navbar.Icon>
                    {title}
                  </Navbar.Item>
                </CustomLink>
              );
            })}
          </Navbar.Section>
          <Navbar.Footer>
            <Navbar.Item>
              <Navbar.Icon>
                {(() => {
                  const Icon = SVG.getNavbarIco("settings");
                  return Icon && <Icon />;
                })()}
              </Navbar.Icon>
              <CustomLink variant="unstyled" color="neutral-0" href="#">
                Configurações
              </CustomLink>
            </Navbar.Item>

            <Navbar.Item>
              <Button variant="unstyled">
                <Navbar.Icon>
                  {(() => {
                    const Icon = SVG.getNavbarIco("logout");
                    return Icon && <Icon />;
                  })()}
                </Navbar.Icon>
                Sair da conta
              </Button>
            </Navbar.Item>
          </Navbar.Footer>
        </Navbar>
      </NavbarWrapper>

      <DashboardHeader />

      {children}
    </DashboardWrapper>
  );
}
