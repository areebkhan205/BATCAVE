import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import borderImg from "../assets/bb22.png";

// Achievements Images
import ambasadoor from "../assets/ambasadoor.jpg";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";
import certificate3 from "../assets/certificate3.jpg";
import certificate4 from "../assets/certificate4.jpg";
import certificate5 from "../assets/certificate5.jpg";
import certificate6 from "../assets/certificate6.jpg";
import certificate7 from "../assets/certificate7.jpg";
import zidiotra from "../assets/zidiotra.jpg";

// ✅ Animation Variants (same as Projects)
export const textVariant = (delay = 0) => ({
  hidden: { y: -40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.1, delay },
  },
});

export const fadeIn = (
  direction = "",
  type = "tween",
  delay = 0,
  duration = 0.6
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

export const staggerContainer = (staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren } },
});

const certificates = [
  { src: certificate1, alt: "Certificate 1" },
  { src: certificate2, alt: "Certificate 2" },
  { src: certificate3, alt: "Certificate 3" },
  { src: certificate4, alt: "Certificate 4" },
  { src: certificate5, alt: "Certificate 5" },
  { src: certificate6, alt: "Certificate 6" },
  { src: certificate7, alt: "Certificate 7" },
  { src: ambasadoor, alt: "Student Ambassador - Galgotias University" },
  { src: zidiotra, alt: "Internship Certificate - Zidio Development" },
];

export default function CertificateLoop() {
  const trackRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const speed = 50;
  const copies = 2;

  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();
    let offset = 0;

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!hovered && trackRef.current) {
        offset -= (speed * delta) / 1000;
        trackRef.current.style.transform = `translateX(${offset}px)`;

        const trackWidth = trackRef.current.scrollWidth / copies;
        if (Math.abs(offset) >= trackWidth) offset = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hovered]);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-20  flex flex-col items-center relative overflow-hidden"
    >
      {/* ===== Animated Heading ===== */}
      <motion.div variants={textVariant()}>
        <p className="text-gray-400 text-sm tracking-widest uppercase text-center">
          My Journey
        </p>
        <h2 className="mt-3 text-[54px] leading-[1] font-extrabold text-white text-center">
          My Achievements.
        </h2>
      </motion.div>

      {/* ===== Subheading line ===== */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center"
      >
        Every milestone is a reflection of dedication and learning.  
        These achievements highlight my growth as a developer — from building innovative projects  
        to contributing to real-world solutions and leadership experiences.
      </motion.p>

      {/* ===== Infinite Certificate Loop ===== */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="relative w-full overflow-hidden py-12 mt-10 flex justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-10 will-change-transform"
          style={{ transition: "transform 0.2s linear" }}
        >
          {Array.from({ length: copies }).map((_, copyIndex) =>
            certificates.map((cert, i) => {
              const isCustomSize =
                cert.alt.includes("Ambassador") || cert.alt.includes("Zidio");

              return (
                <div
                  key={`${copyIndex}-${i}`}
                  className={`relative flex items-center justify-center shrink-0 ${
                    isCustomSize
                      ? "w-[300px] h-[360px] sm:w-[340px] sm:h-[400px]"
                      : "w-[360px] h-[260px] sm:w-[420px] sm:h-[300px]"
                  } rounded-2xl`}
                  style={{
                    backgroundImage: `url(${borderImg})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    padding: "22px",
                  }}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-full object-contain rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_0_30px_#00ffff90]"
                    style={{
                      borderRadius: "12px",
                      filter: "brightness(0.97)",
                      backgroundColor: "white",
                    }}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Fading edges */}
        <div className="absolute left-0 top-0 w-32 h-full  pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full  pointer-events-none"></div>
      </motion.div>
    </motion.section>
  );
}
