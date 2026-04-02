import React from "react";

function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-screen overflow-hidden bg-nyuki-black"
      style={{ zIndex: -1 }}
    >
      {/* Honeycomb pattern SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="honeycomb"
            x="0"
            y="0"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* First hexagon */}
            <polygon
              points="28,0 56,15 56,45 28,60 0,45 0,15"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1"
            />
            {/* Second hexagon (offset) */}
            <polygon
              points="28,50 56,65 56,95 28,110 0,95 0,65"
              fill="none"
              stroke="#FFD700"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>
    </div>
  );
}

export default AnimatedBackground;
