import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  backgroundUrl?: StaticImageData;
}

const StyledLayout = styled.div<{
  backgroundUrl: StaticImageData | undefined;
}>`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  place-items: center;

  ${applyBackground};
`;

export const Layout = ({ backgroundUrl, children }: Props) => {
  return <StyledLayout backgroundUrl={backgroundUrl}>{children}</StyledLayout>;
};

function applyBackground(props: any) {
  if (props.backgroundUrl)
    return css`
      background: url(${props.backgroundUrl.src}) no-repeat;
      background-size: cover;
      z-index: 1;
      padding: 1rem;

      position: relative;
      &::after {
        z-index: -1;
        content: " ";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
        box-shadow: 0rem -0.8125rem 0.875rem 0.5rem rgba(0, 0, 0, 0.39);
      }
    `;

  return { background: props.theme.colors["neutral-100"] };
}
