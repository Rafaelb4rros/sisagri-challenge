import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.875 16.027 9.037 14.19l9.298-9.299 1.84 1.838L21.4 5.503 16.497.6l-1.226 1.226 1.839 1.839-9.298 9.299-1.84-1.84a.867.867 0 0 0-1.225 0l-2.092 2.093A7.002 7.002 0 0 0 .6 18.177c0 .916.18 1.827.534 2.69.86.353 1.771.534 2.688.533a7.007 7.007 0 0 0 4.961-2.055l2.093-2.092a.867.867 0 0 0 0-1.226Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
