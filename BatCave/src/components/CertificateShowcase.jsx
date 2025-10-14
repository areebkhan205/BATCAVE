import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// images (a1 -> a7)
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.png";
import a7 from "../assets/a7.png";

export default function PhotoLoop({ speed = 60, gap = 16 }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [cardSize, setCardSize] = useState({ width: 280, height: 180 });
  const photos = [a1, a2, a3, a4, a5, a6, a7];

  // Resize logic
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const resize = () => {
      const w = el.clientWidth;
      const width = Math.max(
        140,
        Math.min(380, Math.floor(w / (w < 480 ? 2 : w < 768 ? 3 : 4)) - gap)
      );
      const height = Math.round((width * 9) / 16);
      setCardSize({ width, height });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [gap]);

  // Infinite scroll animation
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let offset = 0;

    const animate = (now) => {
      const delta = now - last;
      last = now;

      if (!paused && trackRef.current) {
        offset -= (speed * delta) / 1000;
        trackRef.current.style.transform = `translateX(${offset}px)`;

        const setWidth = trackRef.current.scrollWidth / 2 || 0;
        if (Math.abs(offset) >= setWidth) offset = 0;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [paused, speed]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleTouchStart = () => setPaused(true);
  const handleTouchEnd = () => setPaused(false);

  const copies = 2;

  return (
    <section className="w-full relative py-16 overflow-hidden">
      {/* ===== Heading with animated lines ===== */}
      <div className="flex flex-col items-center justify-center mb-12 relative">
        {/* Top animated line */}
        <motion.div
          className="h-[2px] w-2/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent px-4 mt-6 relative z-10"
        >
          My Achievements
        </motion.h2>

        {/* Description below heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center text-gray-400 text-sm md:text-base mt-4 max-w-xl"
        >
          A glimpse of milestones that showcase my dedication, learning, and
          success throughout my journey.
        </motion.p>

        {/* Bottom line under heading */}
        <motion.div
          className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-green-400 to-transparent mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      {/* ===== Scrolling Certificates ===== */}
      <div
        ref={containerRef}
        aria-label="Scrolling photo gallery"
        className="w-full overflow-hidden"
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full"
        >
          <div
            ref={trackRef}
            className="flex items-center gap-4 will-change-transform"
            style={{ transition: "transform 0.12s linear" }}
          >
            {Array.from({ length: copies }).map((_, copyIndex) =>
              photos.map((src, i) => {
                let customStyle = {};
                let imgScale = 1;

                // Reduce certificate size for a1 and a6
                if (i === 0) {
                  customStyle = { alignSelf: "flex-start" };
                  imgScale = 0.85;
                }
                if (i === 5) {
                  customStyle = { alignSelf: "flex-end" };
                  imgScale = 0.85;
                }

                return (
                  <motion.div
                    key={`${copyIndex}-${i}`}
                    role="listitem"
                    tabIndex={0}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                    whileHover={{ scale: 1.05 }}
                    className="shrink-0 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center  "
                    style={{
                      width: cardSize.width,
                      height: cardSize.height,
                      minWidth: cardSize.width,
                      ...customStyle,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Achievement ${i + 1}`}
                      loading="lazy"
                      className="object-contain transition-transform duration-300 ease-in-out"
                      style={{
                        width: `${imgScale * 190}%`,
                        height: `${imgScale * 160}%`,
                      }}
                    />
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* ===== Bottom Line ===== */}
      <motion.div
        className="h-[2px] w-2/3 mx-auto mt-12 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </section>
  );
}
