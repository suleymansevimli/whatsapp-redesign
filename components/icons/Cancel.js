import * as React from "react";

function SvgCancel(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1l22 22M23 1L1 23" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

export default SvgCancel;
