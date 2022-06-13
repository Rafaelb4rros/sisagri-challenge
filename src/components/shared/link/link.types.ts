import { LinkProps as NextLinkProps } from "next/link";
import { LinkHTMLAttributes } from "react";
import { ColorsType, LinkVariantsType } from "../../../styles/theme";

export type LinkProps = NextLinkProps &
  LinkHTMLAttributes<HTMLLinkElement> & {
    variant?: LinkVariantsType;
    typograph?: string;
    color?: ColorsType;
  };
