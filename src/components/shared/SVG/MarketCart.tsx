import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.367 19.375c1.147 0 2.077-.909 2.077-2.03 0-1.12-.93-2.03-2.077-2.03-1.147 0-2.076.91-2.076 2.03 0 1.121.93 2.03 2.076 2.03ZM17.808 19.375c1.147 0 2.076-.909 2.076-2.03 0-1.12-.93-2.03-2.076-2.03-1.147 0-2.077.91-2.077 2.03 0 1.121.93 2.03 2.077 2.03ZM21.886 3.297H7.505c-.033 0-.066.01-.099.01l-.365-1.829C6.975.995 6.642.705 6.019.62H.773C-.422.625-.455 3.57 2.278 3.19l2.644-.023.469 2.198v.005l1.425 7.04c0 1.14.951 2.072 2.114 2.072h11.53c1.163 0 2.115-.933 2.115-2.072L24 5.37c0-1.14-.952-2.072-2.114-2.072ZM9.53 12.414l-.047.005c-.39.047-.755-.22-.806-.59L7.86 6.282c-.056-.38.23-.731.633-.778L8.54 5.5c.389-.047.754.22.806.59l.816 5.546c.056.38-.23.731-.633.778Zm3.684.019-.052.005c-.393.028-.745-.258-.773-.633l-.464-5.574c-.033-.38.272-.717.675-.74l.052-.005c.393-.028.745.258.773.633l.464 5.573c.033.385-.272.717-.675.74Zm4.27-.666c-.004.38-.337.685-.736.68h-.051c-.399-.005-.722-.319-.717-.699l.093-5.587c.005-.38.338-.684.736-.68h.052c.398.005.722.319.717.699l-.094 5.587Zm4.252-5.456-.952 5.527c-.06.365-.43.623-.82.571l-.047-.004c-.403-.057-.68-.413-.614-.792l.947-5.527c.06-.366.431-.624.82-.572l.047.005c.408.056.685.412.619.792Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;