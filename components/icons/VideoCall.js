import * as React from "react";

function SvgVideoCall(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={30} cy={30} r={30} fill="currentColor" fillOpacity={0.9} />
      <path
        d="M36.168 31.235l5.038 2.751V24.5l-5.038 2.751v3.985z"
        fill="#323232"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.743 23.473h12.165c.81 0 1.465.657 1.466 1.466v9.65a1.468 1.468 0 01-1.466 1.465H20.743a1.468 1.468 0 01-1.467-1.466V24.94c.001-.81.657-1.465 1.467-1.466z"
        fill="#323232"
      />
    </svg>
  );
}

export default SvgVideoCall;
