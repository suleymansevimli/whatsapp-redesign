import * as React from "react";

function SvgStarred(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={17.5} cy={17.5} r={17.5} fill="#F5D941" />
      <path
        d="M17.5 8l2.904 5.504 6.131 1.06-4.337 4.462.886 6.16L17.5 22.44l-5.584 2.746.886-6.16-4.337-4.462 6.131-1.06L17.5 8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStarred;
