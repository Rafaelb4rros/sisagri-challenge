import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.45 13.18 20 5.31V19H0V1h2v12.54L7.5 4 14 7.78 18.24.45l1.73 1-5.23 9.05-6.51-3.75L2.31 17h2.26l4.39-7.56 6.49 3.74Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
