import { motion } from "framer-motion";
import galgotiasLogo from "../assets/galgotias.png";
import oasisLogo from "../assets/oasis.png";
import zidioLogo from "../assets/zidio.png";

/* -------------------------
   Motion Variants and helpers
   ------------------------- */
const textVariant = (delay = 0) => ({
  hidden: { y: -40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.1, delay } },
});

const fadeIn = (direction = "", type = "tween", delay = 0, duration = 0.6) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: { x: 0, y: 0, opacity: 1, transition: { type, delay, duration, ease: "easeOut" } },
});

const staggerContainer = (staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren } },
});

/* -------------------------
   Styles (local strings)
   ------------------------- */
const styles = {
  padding: "px-4 sm:px-16 py-12",
  sectionSubText: "text-gray-400 text-sm tracking-widest",
};

/* -------------------------
   Data
   ------------------------- */
const experiences = [
  {
    company: "Zidio Development",
    role: "Web Developer & Designer Intern",
    period: "Aug 2025 - Sep 2025",
    logo: zidioLogo,
    skills: ["React", "Tailwind", "Motion", "Firebase"],
    desc:
      "Built and optimized production web apps using React and Tailwind. Implemented secure auth flows and efficient data fetching with Firebase.",
    achievements: [
      "Built responsive dashboards — improved UI rendering performance by 15%",
      "Integrated Firebase Auth + Firestore for secure user data storage",
      "Polished animations and UX using Framer Motion (smooth interactions)",
    ],
  },
  {
    company: "Galgotias University",
    role: "Campus Ambassador Intern",
    period: "June 2025 - Present",
    logo: galgotiasLogo,
    skills: ["Leadership", "Communication", "Networking"],
    desc:
      "Led student outreach, coordinated events, and created campaigns to boost engagement and brand presence on campus.",
    achievements: [
      "Organized 5+ large campus events with 200+ attendees each",
      "Managed ambassador team that increased participation by 30%",
      "Forged partnerships with local tech communities and sponsors",
    ],
  },
  {
    company: "Oasis Infobyte",
    role: "Web Developer / Designing Intern",
    period: "June 2025 – Aug 2025",
    logo: oasisLogo,
    skills: ["HTML", "CSS", "JavaScript", "Design"],
    desc:
      "Worked on front-end projects, created reusable UI components, and improved accessibility and responsiveness.",
    achievements: [
      "Delivered 3 responsive websites with modern UI/UX",
      "Built reusable component library to accelerate development",
      "Optimized page load and improved mobile experience",
    ],
  },
];

/* -------------------------
   ExpCard — smooth flip
   ------------------------- */
const ExpCard = ({ index, company, role, period, logo, skills, desc, achievements }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { delay: index * 0.12, type: "spring", stiffness: 110 } },
      }}
      className="w-full sm:w-[320px] md:w-[340px] lg:w-[360px] perspective"
    >
      {/* inner card — we animate rotateY on this element */}
      <motion.div
        className="card-inner relative w-full h-[480px] cursor-pointer rounded-2xl"
        whileHover={{
          rotateY: 180,
          transition: { type: "spring", stiffness: 220, damping: 22 },
        }}
        whileTap={{ scale: 0.985 }}
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
      >
        {/* Front face */}
        <div
          className="card-face card-front absolute bg-gradient-to-b from-[#1f0738] to-[#2b0f3f] shadow-[0_10px_30px_rgba(59,0,80,0.45)] border border-purple-900/30 flex flex-col justify-between p-6 pt-16 rounded-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
            <img src={logo} alt={company} className="w-14 h-14 object-contain" />
          </div>

          <div>
            <h3 className="text-center text-[20px] font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {company}
            </h3>
            <p className="text-purple-300 text-center text-sm">{role}</p>
            <p className="text-gray-400 text-center text-xs mb-4">{period}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {skills.map((s, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-xs text-white shadow-sm"
                animate={{ y: [4, 0, 4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.18 }}
              >
                {s}
              </motion.span>
            ))}
          </div>

          <p className="text-gray-300 text-sm leading-6 text-center">{desc}</p>
        </div>

        {/* Back face — rotated 180deg so it becomes visible after rotation */}
        <div
          className="card-face absolute bg-gradient-to-b from-[#2b0f3f] to-[#1f0738] shadow-[0_10px_30px_rgba(59,0,80,0.45)] border border-purple-900/30 flex flex-col justify-start items-center text-center p-6 pt-16 rounded-2xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h4 className="text-white font-bold text-lg mb-4 border-b border-purple-700/50 pb-2 w-full">Achievements</h4>

          <ul className="space-y-3 text-gray-300 text-sm px-3 w-full">
            {achievements.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-purple-900/20 py-2 px-3 rounded-xl hover:bg-purple-800/35 transition-all duration-250"
              >
                <span className="text-lg leading-none">{/* decorative bullet */}•</span>
                <span className="text-left">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* -------------------------
   Section Component
   ------------------------- */
export default function WorkExp() {
  return (
    <motion.section
      id="work-experience"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} uppercase`}>My Work</p>
        <h2 className="mt-3 text-[54px] leading-[1] font-extrabold">
          <span className="text-white bg-clip-text">Work Experience</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="w-full flex justify-center">
        <p className="mt-6 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center">
          Each experience shaped my journey — from building applications to leading initiatives and delivering outcomes.
        </p>
      </motion.div>

      {/* Single-row alignment on wide screens, wraps on small screens */}
      <div className="mt-14 flex flex-wrap gap-8 justify-center lg:justify-center items-stretch">
        {experiences.map((exp, i) => (
          <ExpCard key={i} index={i} {...exp} />
        ))}
      </div>
    </motion.section>
  );
}
