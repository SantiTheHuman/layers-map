import React from "react";

export default function EllipsisSVG({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="10"
      viewBox="0 3 24 34"
      width="24"
      fill="none"
      className={className}
    >
      <path d="M0 0h24v24H0z" />
      <path
        fill="#FFE3DD"
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </svg>
  );
}
