import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 .063v10.5L10.5 14.5 21 10.562V.063L10.5 4 0 .062Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
