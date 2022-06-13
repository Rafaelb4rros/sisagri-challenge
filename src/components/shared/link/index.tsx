import Link from "next/link";
import { LinkVariantsType } from "../../../styles/theme";
import { LinkStyled } from "./link.styles";
import { LinkProps } from "./link.types";

export function CustomLink({
  color,
  variant,
  typograph,
  children,
  href,
}: LinkProps) {
  return (
    <Link href={href}>
      <LinkStyled
        color={color}
        typograph={typograph}
        variant={variant as LinkVariantsType}
      >
        {children}
      </LinkStyled>
    </Link>
  );
}
