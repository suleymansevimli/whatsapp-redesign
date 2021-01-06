import * as React from "react";

function SvgBaloon(props) {
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
        d="M13.393.89c-6.4 0-11.606 4.805-11.606 10.713.012 2.411.878 4.74 2.444 6.572a5.299 5.299 0 01-3.62 4.188.893.893 0 00.283 1.74 12.31 12.31 0 008.035-2.62c1.423.553 2.937.836 4.464.834 6.4 0 11.607-4.806 11.607-10.714S19.793.89 13.393.89z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBaloon;
