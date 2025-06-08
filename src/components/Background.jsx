import { useState, useEffect, useRef } from "react";

function AnimatedBackground() {
  const [lights, setLights] = useState([]);
  const numberOfLights = 8;
  const animationRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const initialLights = Array.from({ length: numberOfLights }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      color: getRandomColor(),
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.5 + 0.2,
      lastUpdate: performance.now(),
    }));

    setLights(initialLights);

    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === "visible";

      if (isVisibleRef.current) {
        if (!animationRef.current) {
          animationRef.current = requestAnimationFrame(updateLights);
        }
      } else {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const updateLights = (timestamp) => {
      setLights((prevLights) =>
        prevLights.map((light) => {
          const delta = (timestamp - light.lastUpdate) / 16.67;

          let newX = light.x + light.speedX * delta;
          let newY = light.y + light.speedY * delta;

          if (newX <= 0 || newX >= 100) {
            light.speedX = -light.speedX;
            newX = light.x + light.speedX * delta;
          }

          if (newY <= 0 || newY >= 100) {
            light.speedY = -light.speedY;
            newY = light.y + light.speedY * delta;
          }

          let newOpacity = light.opacity;
          if (Math.random() > 0.7) {
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

      animationRef.current = requestAnimationFrame(updateLights);
    };

    animationRef.current = requestAnimationFrame(updateLights);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {lights.map((light, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-md"
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
