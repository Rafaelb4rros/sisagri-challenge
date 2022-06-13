import { SVGProps } from "react";

const Person = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 8.75c3.867 0 7 1.566 7 3.5v1.75H.5v-1.75c0-1.934 3.132-3.5 7-3.5Z"
      fill="#888"
    />
  </svg>
);

export default Person;
