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
      d="M9 9c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3Zm3 5c-4.6 0-6 3.3-6 3.3V19h12v-1.7S16.6 14 12 14ZM18.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 13c-1.2 0-2.1.3-2.8.8 2.3 1.1 3.2 3 3.2 3.2v.1H23v-1.3c0-.1-1.1-2.8-4.5-2.8Z"
      fill="#fff"
    />
    <path
      d="M18.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 13c-1.2 0-2.1.3-2.8.8 2.3 1.1 3.2 3 3.2 3.2v.1H23v-1.3c0-.1-1.1-2.8-4.5-2.8ZM5.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5.5 13c1.2 0 2.1.3 2.8.8-2.3 1.1-3.2 3-3.2 3.2v.1H1v-1.3c0-.1 1.1-2.8 4.5-2.8Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
