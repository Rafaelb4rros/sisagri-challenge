import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 0v1H0v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3h1V1h-5V0H5Zm0 5h2v9H5V5Zm4 0h2v9H9V5Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
