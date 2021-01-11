import * as React from "react";

function SvgBell(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={17.5} cy={17.5} r={17.5} fill="#8BBE1E" />
      <g clipPath="url(#Bell_svg__clip0)" fill="currentColor">
        <path d="M15.5 12.387c.1 0 .2-.022.295-.07a3.775 3.775 0 011.64-.395h.032a.635.635 0 00.052-.003c.015.002.03.003.046.003 2.106.029 3.82 1.756 3.82 3.851v2.325a3.39 3.39 0 001.15 2.584c.53.477 1.058.683 1.142.714a.662.662 0 00.928-.609c0-.3-.2-.554-.473-.636l.001-.002.004.001c-.058-.021-1.424-.553-1.424-2.052v-2.324c0-2.634-2.01-4.835-4.582-5.143v-.967a.664.664 0 10-1.328 0v.975a5.084 5.084 0 00-1.598.489.664.664 0 00.296 1.259zM25.806 24.867L10.134 9.195a.664.664 0 00-.94.94l3.563 3.561a5.191 5.191 0 00-.437 2.078v2.324c0 1.483-1.336 2.02-1.422 2.052a.653.653 0 00-.437.624c0 .697.248 1.46.664 2.039a2.795 2.795 0 002.325 1.196h2.058c0 1.098.894 1.992 1.992 1.992a1.994 1.994 0 001.992-1.992h2.058c.46 0 .88-.088 1.257-.262l2.06 2.06a.662.662 0 00.939 0c.259-.26.259-.68 0-.94zm-8.306-.194a.665.665 0 01-.664-.664h1.328a.665.665 0 01-.664.664zm4.05-1.993h-8.1c-1.027 0-1.486-.86-1.618-1.514.196-.113.431-.271.667-.484a3.39 3.39 0 001.15-2.584v-2.324c0-.352.049-.704.144-1.042l7.939 7.94c-.06.005-.12.008-.181.008z" />
      </g>
      <defs>
        <clipPath id="Bell_svg__clip0">
          <path
            fill="currentColor"
            transform="translate(9 9)"
            d="M0 0h17v17H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgBell;