
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [meteors, setMeteors] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const meteorInterval = setInterval(generateMeteors, 4000);
    return () => clearInterval(meteorInterval);
  }, []);

  // --- Create stars ---
  const generateStars = () => {
    const numberOfStars = 80; // light on GPU, still looks dense
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleDelay: Math.random() * 5,
      });
    }
    setStars(newStars);
  };

  // --- Create meteors ---
  const generateMeteors = () => {
    const numberOfMeteors = 8; // smooth performance
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i + "-" + Date.now(),
        length: Math.random() * 80 + 60,
        thickness: Math.random() * 1.5 + 0.8,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 3,
        hue: Math.floor(Math.random() * 30) + 210,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 ">
      {/* ✨ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: "white",
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
          }}
        />
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute animate-meteorTrail"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.length}px`,
            height: `${meteor.thickness}px`,
            background: `linear-gradient(90deg, hsla(${meteor.hue},100%,80%,1), transparent)`,
            opacity: 0.8,
            transform: "rotate(45deg)",
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
            borderRadius: "2px",
            filter: "blur(0.5px)", // soft glow without lag
          }}
        />
      ))}
    </div>
  );
};
