import * as React from "react";

function SvgCall(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.994 16.41c-1.53 0-3.034-.24-4.458-.71-.698-.238-1.555-.02-1.981.417l-2.811 2.122c-3.26-1.74-5.268-3.747-6.985-6.983L8.82 8.52a2.02 2.02 0 00.497-2.048 14.216 14.216 0 01-.713-4.465C8.603.9 7.703 0 6.597 0H2.006C.9 0 0 .9 0 2.006 0 14.686 10.315 25 22.994 25 24.1 25 25 24.1 25 22.994v-4.578c0-1.106-.9-2.006-2.006-2.006z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCall;
