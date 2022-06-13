import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.94 11h9.75"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.947 17.75V20h-12V2h12v2.25h1.5v-3a.75.75 0 0 0-.75-.75h-13.5a.75.75 0 0 0-.75.75v19.5a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-3h-1.5Z"
      fill="#F2F2F2"
    />
    <path
      d="m17.69 11-3 3M17.69 11l-3-3M14.69 5.067v-1.5M14.69 18.5V17"
      stroke="#F2F2F2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
