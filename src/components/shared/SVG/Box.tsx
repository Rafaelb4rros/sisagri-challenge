import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 0h18v4H0V0Zm1 5h16v13H1V5Zm5.5 3a.5.5 0 0 0-.5.5V10h6V8.5a.5.5 0 0 0-.5-.5h-5Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
