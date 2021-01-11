import * as React from "react";

function SvgMessage(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={17.5} cy={17.5} r={17.5} fill="#1EBE71" />
      <path
        d="M11.475 24.984h-1.204l.851-.852c.46-.459.746-1.056.823-1.704C9.98 21.137 9 19.268 9 17.308c0-3.617 3.324-7.292 8.529-7.292 5.514 0 8.471 3.382 8.471 6.974 0 3.617-2.988 6.996-8.471 6.996-.96 0-1.963-.128-2.858-.363a4.464 4.464 0 01-3.196 1.36z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessage;
