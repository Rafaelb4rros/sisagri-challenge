import { SVGProps } from "react";

const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 14.875a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.75 7a1.75 1.75 0 0 1 1.75 1.75v8.75a1.75 1.75 0 0 1-1.75 1.75H2.25A1.75 1.75 0 0 1 .5 17.5V8.75C.5 7.779 1.288 7 2.25 7h.875V5.25a4.375 4.375 0 0 1 8.75 0V7h.875ZM7.5 2.625A2.625 2.625 0 0 0 4.875 5.25V7h5.25V5.25A2.625 2.625 0 0 0 7.5 2.625Z"
      fill="#888"
    />
  </svg>
);

export default Lock;
