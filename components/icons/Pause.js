import * as React from "react";

function SvgPause(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={18} cy={18} r={18} fill="currentColor" />
      <rect x={12} y={10} width={5} height={16} rx={2.5} fill="#1EBE71" />
      <rect x={19} y={10} width={5} height={16} rx={2.5} fill="#1EBE71" />
    </svg>
  );
}

export default SvgPause;
