import * as React from "react";

function SvgSpeaker(props) {
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
      <g clipPath="url(#Speaker_svg__clip0)" fill="#323232">
        <path d="M31.681 20.395a.689.689 0 00-.73.083l-6.722 5.377h-3.211c-.761 0-1.382.62-1.382 1.382v5.527c0 .763.62 1.382 1.382 1.382h3.211l6.72 5.377a.698.698 0 00.732.081.69.69 0 00.392-.622V21.02a.693.693 0 00-.392-.624zM35.57 25.114a.693.693 0 00-.977.006.693.693 0 00.005.978A5.437 5.437 0 0136.218 30a5.437 5.437 0 01-1.62 3.903.691.691 0 00.972.98A6.795 6.795 0 0037.6 30c0-1.858-.72-3.594-2.03-4.886z" />
        <path d="M37.52 23.167a.692.692 0 00-.975.981A8.18 8.18 0 0138.982 30a8.177 8.177 0 01-2.437 5.851.694.694 0 00-.004.978.695.695 0 00.979.003A9.543 9.543 0 0040.363 30a9.549 9.549 0 00-2.843-6.833z" />
      </g>
      <defs>
        <clipPath id="Speaker_svg__clip0">
          <path
            fill="currentColor"
            transform="translate(19.636 19.636)"
            d="M0 0h20.727v20.727H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgSpeaker;
