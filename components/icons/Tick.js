import * as React from "react";

function SvgTick(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.166 4.604L5.35 8.453 12.45.595"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.688 4.604l4.185 3.849L19.971.595"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTick;
