import * as React from "react";

function SvgSearchBordered(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={17.5} cy={17.5} r={17.5} fill="currentColor" />
      <path
        d="M20.38 18.901a5.64 5.64 0 10-1.735 1.598l4.159 4.134a1.18 1.18 0 101.669-1.67l-4.093-4.062zm-4.608.385a3.639 3.639 0 11-.007-7.277 3.639 3.639 0 01.01 7.277h-.003z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearchBordered;
