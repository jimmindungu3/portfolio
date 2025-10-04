import { useState, useEffect, useRef } from "react";

function AnimatedBackground() {
  const [bees, setBees] = useState([]);
  const numberOfBees = 3;
  const animationRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    // Initialize bees with random positions and properties
    const initialBees = Array.from({ length: numberOfBees }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * 360,
      lastUpdate: performance.now(),
    }));

    setBees(initialBees);

    // Handle tab visibility to pause animation when tab is not visible
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === "visible";

      if (isVisibleRef.current) {
        if (!animationRef.current) {
          animationRef.current = requestAnimationFrame(updateBees);
        }
      } else {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Update bees position on each frame
    const updateBees = (timestamp) => {
      setBees((prevBees) =>
        prevBees.map((bee) => {
          const delta = (timestamp - bee.lastUpdate) / 16.67;

          let newX = bee.x + bee.speedX * delta;
          let newY = bee.y + bee.speedY * delta;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            bee.speedX = -bee.speedX;
            newX = bee.x + bee.speedX * delta;
          }

          if (newY <= 0 || newY >= 100) {
            bee.speedY = -bee.speedY;
            newY = bee.y + bee.speedY * delta;
          }

          // Calculate rotation based on movement direction
          const angle = Math.atan2(bee.speedY, bee.speedX) * (180 / Math.PI);

          return {
            ...bee,
            x: newX,
            y: newY,
            rotation: angle,
            lastUpdate: timestamp,
          };
        })
      );

      animationRef.current = requestAnimationFrame(updateBees);
    };

    animationRef.current = requestAnimationFrame(updateBees);

    // Cleanup function
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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

      {/* Animated bees */}
      {bees.map((bee, index) => (
        <div
          key={index}
          className="absolute transition-transform duration-100"
          style={{
            left: `${bee.x}%`,
            top: `${bee.y}%`,
            transform: `translate(-50%, -50%) rotate(${bee.rotation}deg)`,
          }}
        >
          {/* Bee SVG */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wings */}
            <ellipse
              cx="12"
              cy="15"
              rx="8"
              ry="6"
              fill="#FFF7E6"
              opacity="0.6"
            />
            <ellipse
              cx="12"
              cy="25"
              rx="8"
              ry="6"
              fill="#FFF7E6"
              opacity="0.6"
            />
            {/* Body */}
            <ellipse cx="20" cy="20" rx="12" ry="8" fill="#FFB830" />
            {/* Stripes */}
            <rect x="14" y="16" width="3" height="8" fill="#1C1C1C" />
            <rect x="21" y="16" width="3" height="8" fill="#1C1C1C" />
            {/* Head */}
            <circle cx="30" cy="20" r="5" fill="#FFD700" />
            {/* Antennae */}
            <line
              x1="32"
              y1="17"
              x2="34"
              y2="14"
              stroke="#1C1C1C"
              strokeWidth="1"
            />
            <line
              x1="32"
              y1="23"
              x2="34"
              y2="26"
              stroke="#1C1C1C"
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default AnimatedBackground;
