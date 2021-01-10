import * as React from "react";

function SvgPlay(props) {
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
      <path d="M28 17.5l-15.75 9.093V8.407L28 17.5z" fill="#4DC98D" />
    </svg>
  );
}

export default SvgPlay;
