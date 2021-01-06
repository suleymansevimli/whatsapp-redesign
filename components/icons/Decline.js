import * as React from "react";

function SvgDecline(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={41} cy={41} r={41} fill="#CF3232" />
      <path
        d="M25.222 46.28h5.921c2.115 0 3.49-2.22 2.538-4.017-.635-1.269-.106-2.855 1.057-3.595 2.643-1.586 8.247-1.691 10.995 0 1.27.635 1.692 2.326 1.058 3.595-.952 1.797.423 4.018 2.537 4.018h5.92c1.587-.106 2.856-1.375 2.856-2.855v-4.018c-.106-4.123-7.93-7.506-17.868-7.506-9.939 0-17.868 3.277-17.868 7.506v4.018c.105 1.586 1.374 2.855 2.854 2.855z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDecline;
