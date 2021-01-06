import * as React from "react";

function SvgVideoOff(props) {
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
        d="M38.35 32.488l5.039 2.75v-9.486l-5.039 2.75v3.986zM17.616 21.168a.528.528 0 01-.014-.746l.6-.624a.528.528 0 01.747-.014l21.985 21.163c.21.202.216.536.014.746l-.6.624a.528.528 0 01-.747.014L17.616 21.168z"
        fill="#323232"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.128 24.726h-1.203c-.81 0-1.466.656-1.466 1.466v9.649c0 .81.656 1.465 1.466 1.466H35.09c.582 0 1.086-.34 1.322-.833L24.128 24.726zM36.556 35.09v-8.9c0-.809-.657-1.464-1.466-1.465h-9.434l10.9 10.365z"
        fill="#323232"
      />
    </svg>
  );
}

export default SvgVideoOff;
