import { motion } from "framer-motion";
import { useState } from "react";
import EcoCardImg from "../assets/batcc.png"; // background card art
import ContentPNG from "../assets/batm.png"; // bat image

// ---------------- EcoCard (simple static) ----------------
function EcoCard() {
  return (
    <div className="relative left-[-5px] bottom-[10px] w-[160px] md:w-[220px] h-[250px] md:h-[280px] rounded-2xl overflow-hidden">
      <img
        src={EcoCardImg}
        alt="eco card"
        className="w-full h-full object-contain select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
}

// ---------------- NAV ----------------
function NAV() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "work-experience", label: "Work Experience" },
    { id: "projects", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center px-13 h-16 bg-[#1A0B2E] md:p-7 z-40 relative">
        {/* logo with bat animation */}
        <div className="md:ps-[47px] text-xl relative top-4 md:right-0 right-8 md:gap-2 font-bold bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row bg-clip-text text-transparent">
          Areeb Khan
          <motion.img
            src={ContentPNG}
            alt="bat"
            className="bat w-22 h-19 relative bottom-4"
            draggable={false}
            style={{
              transformStyle: "flat",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
            animate={{ rotate: [-8, 8, -6, 6, -8] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* nav links (desktop) */}
        <ul className="md:pe-[72px] hidden md:flex gap-40 cursor-pointer whitespace-normal text-white items-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              className="nav-item list-none"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${link.id}`}
                className="text-white hover:text-purple-400"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
            className="text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            &#8801;
          </button>
        </div>

        {/* EcoCard on the right */}
        <div className="absolute right-4 top-[64px] bottom-1">
          <EcoCard />
        </div>
      </nav>

      {/* sidebar for mobile */}
      {sidebarOpen && (
        <motion.aside
          key="sidebar"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
          transition={{ type: "tween", duration: 0.22 }}
          className="fixed top-0 left-0 w-64 h-full bg-[#140425] text-white z-50"
          aria-modal="true"
          role="dialog"
        >
          <div className="p-4 flex justify-between items-center">
            <span className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Areeb Khan
            </span>
            <img src={ContentPNG} className="bat w-19 h-19" alt="bat" />
            <button
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
              className="text-xl"
            >
              ✖
            </button>
          </div>

          <ul className="mt-4 space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-purple-400 block py-1"
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </motion.aside>
      )}
    </>
  );
}

export default NAV;
