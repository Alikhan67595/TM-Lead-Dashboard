import React from 'react';

export const DeleteIcon = ({ size = "18px", color = "currentColor", className = "" }) => {
  return (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      strokeWidth="0" 
      viewBox="0 0 24 24" 
      height={size} 
      width={size} 
      style={{ color: color }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
    </svg>
  );
};
