import * as React from "react";

function SvgDots(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={3.214} cy={3.214} r={3.214} fill="currentColor" />
      <circle cx={12.5} cy={3.214} r={3.214} fill="currentColor" />
      <circle cx={21.786} cy={3.214} r={3.214} fill="currentColor" />
    </svg>
  );
}

export default SvgDots;
