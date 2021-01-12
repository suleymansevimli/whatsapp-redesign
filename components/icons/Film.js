import * as React from "react";

function SvgFilm(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Film_svg__clip0)" fill="#323232">
        <path d="M10.976 3.424H1.18C.529 3.424 0 3.952 0 4.604v7.77c0 .65.529 1.179 1.18 1.18h9.796c.651-.001 1.18-.53 1.18-1.18v-7.77c0-.652-.529-1.18-1.18-1.18zM12.943 10.106L17 12.32V4.682l-4.057 2.215v3.209z" />
      </g>
      <defs>
        <clipPath id="Film_svg__clip0">
          <path fill="currentColor" d="M0 0h17v17H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFilm;
