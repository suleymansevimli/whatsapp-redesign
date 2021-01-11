import * as React from "react";

function SvgCallBordered(props) {
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
        d="M14.725 11.367l1.954 1.958c.698.7.419 1.888-.488 2.168-.628.21-.977.909-.838 1.538.35 1.398 2.164 3.286 3.629 3.636.628.21 1.326-.21 1.535-.84.279-.908 1.465-1.188 2.163-.489l1.954 1.958c.488.56.488 1.399 0 1.888l-1.326 1.329c-1.396 1.328-5.094-.14-8.373-3.427-3.28-3.286-4.815-6.992-3.42-8.39l1.326-1.329c.559-.49 1.396-.49 1.884 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCallBordered;
