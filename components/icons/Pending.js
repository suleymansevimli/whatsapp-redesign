import * as React from "react";

function SvgPending(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={10} cy={10} r={10} fill="#FCFCFC" />
      <path
        stroke="#000"
        d="M9.757 11.858l4.414-6.672M4.716 12.237l5.926-.942"
      />
    </svg>
  );
}

export default SvgPending;
