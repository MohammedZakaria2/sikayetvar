import * as React from 'react';

const Marker = (props) => (
  <svg
    width={27}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.18}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 38c7.456 0 13.5-2.462 13.5-5.5S20.956 27 13.5 27 0 29.462 0 32.5 6.044 38 13.5 38Z"
      fill="#171717"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.108 14.523a3.63 3.63 0 1 1 0-7.263 3.632 3.632 0 0 1 0 7.263Zm7.67-11.303c-4.296-4.293-11.26-4.293-15.557 0-3.87 3.87-4.305 11.16-1.02 15.54l8.8 12.706 8.8-12.706c3.283-4.38 2.848-11.67-1.023-15.54Z"
      fill="#EF5350"
    />
  </svg>
);

export default Marker;
