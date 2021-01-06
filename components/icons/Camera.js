import * as React from "react";

function SvgCamera(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.875 3.687h-2.16L18.153.562H6.846L5.284 3.69l-2.156.004a3.13 3.13 0 00-3.12 3.123L0 19.312a3.129 3.129 0 003.125 3.126h18.75A3.128 3.128 0 0025 19.313v-12.5a3.128 3.128 0 00-3.125-3.126zM12.5 18.532a6.257 6.257 0 01-6.25-6.25 6.257 6.257 0 016.25-6.25 6.257 6.257 0 016.25 6.25 6.257 6.257 0 01-6.25 6.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCamera;
