import * as React from "react";

function SvgMicrophone(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Microphone_svg__clip0)" fill="gray">
        <path d="M18.86 11.879a.797.797 0 00-.812-.812.797.797 0 00-.811.812 5.74 5.74 0 01-5.737 5.736 5.74 5.74 0 01-5.736-5.736.797.797 0 00-.812-.812.797.797 0 00-.812.812c0 3.761 2.814 6.927 6.548 7.333v2.165H7.74a.797.797 0 00-.812.811c0 .46.352.812.812.812h7.522c.46 0 .812-.352.812-.812a.797.797 0 00-.812-.811h-2.95v-2.165c3.735-.406 6.55-3.572 6.55-7.333z" />
        <path d="M11.5 0A4.527 4.527 0 006.98 4.519v7.333c0 2.516 2.03 4.519 4.519 4.546 2.49 0 4.519-2.03 4.519-4.52v-7.36c0-2.489-2.03-4.518-4.52-4.518z" />
      </g>
      <defs>
        <clipPath id="Microphone_svg__clip0">
          <path fill="currentColor" d="M0 0h23v23H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgMicrophone;
