import * as React from "react";

function SvgPhone(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.037 7.877a6.813 6.813 0 01-2.14-.341c-.335-.114-.746-.01-.95.2l-1.35 1.019C5.032 7.92 4.068 6.956 3.244 5.403l.99-1.314a.97.97 0 00.238-.983A6.823 6.823 0 014.13.963.964.964 0 003.167 0H.963A.964.964 0 000 .963C0 7.049 4.951 12 11.037 12a.964.964 0 00.963-.963V8.84a.964.964 0 00-.963-.962z"
        fill="#323232"
      />
    </svg>
  );
}

export default SvgPhone;
