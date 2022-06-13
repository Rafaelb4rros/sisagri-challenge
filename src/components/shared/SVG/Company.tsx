import { SVGProps } from "react";

const Company = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.342 11.125h-1.787v1.75h1.787v-1.75Zm0-3.5h-1.787v1.75h1.787v-1.75Zm1.788 7H8.98v-1.75h1.787v-1.75H8.98v-1.75h1.787v-1.75H8.98v-1.75h7.15v8.75Zm-8.937-10.5H5.406v-1.75h1.787v1.75Zm0 3.5H5.406v-1.75h1.787v1.75Zm0 3.5H5.406v-1.75h1.787v1.75Zm0 3.5H5.406v-1.75h1.787v1.75Zm-3.575-10.5H1.831v-1.75h1.787v1.75Zm0 3.5H1.831v-1.75h1.787v1.75Zm0 3.5H1.831v-1.75h1.787v1.75Zm0 3.5H1.831v-1.75h1.787v1.75Zm5.362-10.5v-3.5H.043v15.75h17.874V4.125H8.98Z"
      fill="#888"
    />
  </svg>
);

export default Company;
