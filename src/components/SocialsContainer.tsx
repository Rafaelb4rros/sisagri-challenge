import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import styled from "styled-components";

export const SocialsContainerWrapper = styled.div<{
  variant?: "small" | "primary";
}>`
  display: flex;
  gap: ${({ variant }) => (variant === "small" ? "2.125rem" : "4.625rem")};
  max-width: min-content;
  margin: 2rem auto;
`;

function SocialsContainer({ variant }: { variant: "small" | "primary" }) {
  return (
    <SocialsContainerWrapper variant={variant}>
      <FacebookLogo
        size={variant === "small" ? 30 : 50}
        color={variant === "small" ? " #00A69A" : "#FFFFFF"}
      />
      <InstagramLogo
        size={variant === "small" ? 30 : 50}
        color={variant === "small" ? " #00A69A" : "#FFFFFF"}
      />
      <WhatsappLogo
        size={variant === "small" ? 30 : 50}
        color={variant === "small" ? " #00A69A" : "#FFFFFF"}
      />
    </SocialsContainerWrapper>
  );
}

export { SocialsContainer };
