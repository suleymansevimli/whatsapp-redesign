import * as React from "react";

function SvgVideo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={17.5} cy={17.5} r={17.5} fill="#1EBE71" />
      <path
        d="M19.976 12.424H10.18c-.652 0-1.18.528-1.181 1.18v7.77c0 .65.529 1.179 1.18 1.18h9.796c.651-.001 1.18-.53 1.18-1.18v-7.77c0-.652-.529-1.18-1.18-1.18zM21.943 19.106L26 21.32v-7.638l-4.057 2.215v3.209z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVideo;
