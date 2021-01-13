import * as React from "react";

function SvgVerticalDotMenu(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 5 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={2.5} cy={2.5} r={2.5} fill="currentColor" />
      <circle cx={2.5} cy={10.5} r={2.5} fill="currentColor" />
      <circle cx={2.5} cy={18.5} r={2.5} fill="currentColor" />
    </svg>
  );
}

export default SvgVerticalDotMenu;
