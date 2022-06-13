import { css, FlattenSimpleInterpolation } from "styled-components";

const colors = {
  danger: "#DB4437",
  overlay: "rgba(24, 24, 25, 0.9)",
  transparent: "rgba(255, 255, 255, 0.42)",
  glass: "gba(24, 24, 25, 0.42)",
  "neutral-0": "#FFFFFF",
  "neutral-100": "#F8F8FA",
  "neutral-200": "#E6E7E9",
  "neutral-600": "#5F5F5F",
  "neutral-800": "#DBDBDB",
  "neutral-900": "#888888",
  menu: "#2B2D42",
  dark: "#181819",
  "green-200": "rgba(0, 166, 154, 0.6)",
  "green-500": "#00A69A",
  "green-700": "#1A877F",
};

const typograph = {
  h1: "2.375rem",
  h2: "2rem",
  h3: "1.5rem",
  h4: "1.125rem",
  h5: "1rem",
  h6: ".875rem",
  h7: ".75rem",
  h8: ".625rem",
};

const breakpoints = {
  sm: "(min-width:  20rem)",
  md: "(min-width: 48rem)",
  lg: "(min-width: 64rem)",
};

export const breakpoint = (
  size: keyof typeof breakpoints,
  content: FlattenSimpleInterpolation
) => {
  return css`
    @media ${breakpoints[size]} {
      ${content}
    }
  `;
};

const variants = {
  heading: {
    sm: typograph.h3,
    md: typograph.h2,
    lg: typograph.h1,
  },
  text: {
    xxsm: typograph.h8,
    xsm: typograph.h7,
    sm: typograph.h6,
    md: typograph.h5,
    lg: typograph.h4,
  },
  input: {
    primary: css`
      border: solid 0.125rem ${colors["neutral-800"]};
      background: ${colors["neutral-0"]};
      color: ${colors["neutral-600"]};
      font-size: 1rem;

      &:focus {
        outline: solid 0.0625rem ${colors["green-700"]};
      }

      &::placeholder {
        font-size: 0.875rem;
        color: ${colors["neutral-900"]};
      }
    `,
  },
  link: {
    unstyled: css`
      cursor: pointer;
      color: ${colors["green-700"]};
      text-decoration: none;
    `,
  },
  button: {
    primary: css`
      background: ${colors["green-700"]};
      color: ${colors["neutral-0"]};
      width: 100%;
      padding: 0.8125rem;
      border: 0;
      border-radius: 0.5rem;
      font-size: 1rem;
    `,

    unstyled: css`
      border: 0;
      padding: 0;
      background: transparent;
    `,
  },
};

export const theme = {
  colors,
  variants,
  typograph,
};

export type ButtonVariantsType = keyof typeof variants.button;
export type LinkVariantsType = keyof typeof variants.link;
export type InputVariantsType = keyof typeof variants.input;
export type HeadingVariantsType = keyof typeof variants.heading;
export type TextVariantsType = keyof typeof variants.text;
export type TypographType = keyof typeof typograph;
export type ColorsType = keyof typeof colors;
