import { useState, useEffect, useRef } from "react";

function AnimatedBackground() {
  // State for the moving lights
  const [lights, setLights] = useState([]);
  const numberOfLights = 8; // Reduced for better performance
  const animationRef = useRef(null);
  const isVisibleRef = useRef(true);

  // Initialize lights on component mount
  useEffect(() => {
    // Create initial lights
    const initialLights = Array.from({ length: numberOfLights }, () => ({
      x: Math.random() * 100, // % of screen width
      y: Math.random() * 100, // % of screen height
      size: Math.random() * 20 + 10, // Size between 10-30px
      color: getRandomColor(),
      speedX: (Math.random() - 0.5) * 0.15, // Slower movement
      speedY: (Math.random() - 0.5) * 0.15, // Slower movement
      opacity: Math.random() * 0.5 + 0.2,
      lastUpdate: performance.now(),
    }));

    setLights(initialLights);

    // Setup visibility change detection to pause when tab not visible
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === "visible";

      if (isVisibleRef.current) {
        // Resume animation
        if (!animationRef.current) {
          animationRef.current = requestAnimationFrame(updateLights);
        }
      } else {
        // Pause animation
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Animation function using requestAnimationFrame
    const updateLights = (timestamp) => {
      setLights((prevLights) =>
        prevLights.map((light) => {
          // Calculate time delta for smooth animation
          const delta = (timestamp - light.lastUpdate) / 16.67; // normalize to ~60fps

          // Move the light
          let newX = light.x + light.speedX * delta;
          let newY = light.y + light.speedY * delta;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            light.speedX = -light.speedX;
            newX = light.x + light.speedX * delta;
          }

          if (newY <= 0 || newY >= 100) {
            light.speedY = -light.speedY;
            newY = light.y + light.speedY * delta;
          }

          // Only change opacity sometimes (less computation)
          let newOpacity = light.opacity;
          if (Math.random() > 0.7) {
            // Only update opacity 30% of the time
            newOpacity = light.opacity + (Math.random() - 0.5) * 0.05;
            newOpacity = Math.max(0.2, Math.min(0.7, newOpacity));
          }

          return {
            ...light,
            x: newX,
            y: newY,
            opacity: newOpacity,
            lastUpdate: timestamp,
          };
        })
      );

      // Continue animation loop if component is still mounted and tab is visible
      animationRef.current = requestAnimationFrame(updateLights);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(updateLights);

    // Clean up on unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Helper function to generate a random color
  function getRandomColor() {
    const colors = [
      "#FF3366", // Bright pink
      "#33CCFF", // Bright blue
      "#FFCC00", // Bright yellow
      "#66FF66", // Bright green
      "#FF66FF", // Bright magenta
      "#00FFCC", // Bright teal
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      className="fixed inset-0 w-full h-screen overflow-hidden bg-gray-900"
      style={{ zIndex: -1 }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Animated lights with reduced blur for better performance */}
      {lights.map((light, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-md" // Reduced blur for performance
          style={{
            left: `${light.x}%`,
            top: `${light.y}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            backgroundColor: light.color,
            opacity: light.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedBackground;
