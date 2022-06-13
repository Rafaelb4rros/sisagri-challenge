import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.5 7.5h-6v15H15V0H9v22.5H7.5V12h-6v10.5H0V24h24v-1.5h-1.5v-15Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
