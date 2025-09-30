// // src/components/WorkExp.jsx
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import battt from "../assets/battts.png";
// import galgotiasLogo from "../assets/galgotias.png";
// import globe from "../assets/globe.png";
// import oasisLogo from "../assets/oasis.png";
// import zidioLogo from "../assets/zidio.png";

// /* -------------------------
//    Inline motion variants
//    ------------------------- */
// const textVariant = (delay = 0) => ({
//   hidden: { y: -40, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.1, delay } },
// });

// const fadeIn = (direction = "", type = "tween", delay = 0, duration = 0.6) => ({
//   hidden: {
//     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//     opacity: 0,
//   },
//   show: { x: 0, y: 0, opacity: 1, transition: { type, delay, duration, ease: "easeOut" } },
// });

// const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
//   hidden: {},
//   show: { transition: { staggerChildren, delayChildren } },
// });

// /* -------------------------
//    Styles (small local object)
//    ------------------------- */
// const styles = {
//   padding: "px-4 sm:px-16 py-12",
//   sectionSubText: "text-gray-400 text-sm tracking-widest",
// };

// /* -------------------------
//    Helper subcomponents
//    ------------------------- */
// const GlobeDecor = () => (
//   <img
//     src={globe}
//     alt=""
//     aria-hidden="true"
//     className="absolute top-[-22px] left-[10px] transform -translate-x-1/2 w-24 md:w-32 pointer-events-none"
//   />
// );

// const LogoMarker = ({ src, alt, company }) => {
//   const logoSize =
//     company === "zidio" || company === "galgotias" ? "w-18 h-18 md:w-20 md:h-20" : "w-14 h-14 md:w-16 md:h-16";

//   return (
//     <div className="w-20 h-20 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white">
//       <img src={src} alt={alt} className={`${logoSize} object-contain`} />
//     </div>
//   );
// };

// /* -------------------------
//    Experience data
//    ------------------------- */
// const experiences = [
//   {
//     company: "ZIDIO DEVELOPMENT",
//     role: "Web Developer & Designer Intern",
//     period: "Aug 2025 - Sep 2025",
//     logo: zidioLogo,
//     skills: ["React", "Tailwind", "Motion", "Lucide", "Firebase"],
//     desc:
//       "Assisted in designing, developing, and maintaining responsive web applications. Worked on UI/UX, database integration and APIs while collaborating to troubleshoot, optimize and implement features.",
//   },
//   {
//     company: "GALGOTIAS UNIVERSITY",
//     role: "Campus Ambassador Intern",
//     period: "June 2025 - Present",
//     logo: galgotiasLogo,
//     skills: ["Leadership", "Mentor", "Communication", "Networking"],
//     desc:
//       "Promoted events and initiatives, engaged with students, and collected feedback — building skills in communication, leadership, and brand representation.",
//   },
//   {
//     company: "OASIS INFOBYTE",
//     role: "Web Developer / Designing Intern",
//     period: "June 2025 – Aug 2025",
//     logo: oasisLogo,
//     skills: ["HTML", "CSS", "JavaScript", "Designing"],
//     desc:
//       "Worked on full-stack web projects, designed user-friendly interfaces, and applied real-world development practices to boost technical confidence.",
//   },
// ];

// /* -------------------------
//    Single file WorkExp component
//    ------------------------- */
// export default function WorkExp() {
//   // Timeline grow refs (desktop & mobile)
//   const desktopLineRef = useRef(null);
//   const desktopInView = useInView(desktopLineRef, { once: true, margin: "-120px" });
//   const mobileLineRef = useRef(null);
//   const mobileInView = useInView(mobileLineRef, { once: true, margin: "-120px" });

//   return (
//     <motion.section
//       id="work-experience"
//       variants={staggerContainer(0.12)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//     >
//       {/* Heading area (animated) */}
//       <motion.div variants={textVariant()} className="text-center mb-8 md:mb-12">
//         <p className={`${styles.sectionSubText} uppercase`}>My Work</p>

//         <h2 className="mt-3 text-[54px] leading-[1] font-extrabold">
//           <motion.span
//             variants={fadeIn("", "spring", 0.05, 0.9)}
//             className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
//           >
//             Work Experience
//           </motion.span>
//         </h2>
//       </motion.div>

//       {/* Short description */}
//       <motion.div variants={fadeIn("", "", 0.1, 1)} className="w-full flex justify-center">
//         <motion.p className="mt-6 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center">
//           These roles highlight my growth as a developer and collaborator — building responsive apps,
//           improving UX, and working across the full development lifecycle.
//         </motion.p>
//       </motion.div>

//       {/* Timeline lines */}
//       <div className="relative mt-12 min-h-[640px]">
//         {/* Desktop vertical timeline */}
//         <motion.div
//           ref={desktopLineRef}
//           initial={{ scaleY: 0 }}
//           animate={{ scaleY: desktopInView ? 1 : 0 }}
//           transition={{ duration: 2.2, ease: "easeOut" }}
//           style={{ transformOrigin: "top" }}
//           className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-[85%] z-0"
//         />

//         {/* Mobile timeline (left) */}
//         <motion.div
//           ref={mobileLineRef}
//           initial={{ scaleY: 0 }}
//           animate={{ scaleY: mobileInView ? 1 : 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           style={{ transformOrigin: "top" }}
//           className="md:hidden absolute left-6 top-2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full z-0"
//         />

//         {/* Cards grid — each card uses inline variants */}
//         <div className="relative z-10 space-y-10 md:space-y-16">
//           {experiences.map((exp, index) => {
//             const isLeft = index % 2 === 0; // alternate sides on desktop
//             return (
//               <article key={exp.company} className="flex items-center w-full flex-col md:flex-row">
//                 {/* Logo marker centered on timeline */}
//                 <div className="absolute md:left-1/2 left-6 transform md:-translate-x-1/2 z-20">
//                   <LogoMarker src={exp.logo} alt={exp.company} company={exp.company.toLowerCase()} />
//                 </div>

//                 {/* Card container (alternates sides on desktop) */}
//                 <div
//                   className={`w-full md:w-[calc(50%-4rem)] ${
//                     isLeft ? "pl-12 md:mr-auto md:pl-16" : "pl-12 md:pl-0 md:ml-auto md:pr-16"
//                   }`}
//                 >
//                   <motion.div
//                     variants={fadeIn(isLeft ? "right" : "left", "spring", index * 0.12, 0.8)}
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, amount: 0.3 }}
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ type: "spring", stiffness: 120 }}
//                     className="relative card space-y-3 shadow-2xl border-2 border-purple-900/30
//                                hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.7)]
//                                transition-all duration-300 p-4 md:p-6 overflow-visible bg-gradient-to-b from-[#12021b] to-[#281232]"
//                   >
//                     {/* Decorative globe placed near top-left */}
//                     <div className="relative -top-10 -left-6">
//                       <GlobeDecor />
//                     </div>

//                     {/* Animated bats (two floats) */}
//                     <motion.img
//                       src={battt}
//                       alt="bat-left"
//                       className="absolute top-2 left-2 h-8 w-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
//                       animate={{ y: [0, -6, 0] }}
//                       transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
//                     />
//                     <motion.img
//                       src={battt}
//                       alt="bat-right"
//                       className="absolute top-2 right-2 h-8 w-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
//                       animate={{ y: [0, -6, 0] }}
//                       transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 + 0.5 }}
//                     />

//                     {/* Title + role */}
//                     <h3 className="text-2xl md:text-3xl font-bold">
//                       <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//                         {exp.company}
//                       </span>
//                     </h3>
//                     <p className="text-lg md:text-xl text-purple-300">{exp.role}</p>
//                     <p className="text-xs md:text-sm text-gray-400">{exp.period}</p>

//                     {/* skill chips */}
//                     <div className="flex flex-row flex-wrap font-poppins justify-center gap-3">
//                       {exp.skills.map((s) => (
//                         <button
//                           key={s}
//                           className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm text-white"
//                         >
//                           {s}
//                         </button>
//                       ))}
//                     </div>

//                     {/* description */}
//                     <p className="text-sm md:text-base text-gray-300 mb-4">{exp.desc}</p>
//                   </motion.div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </motion.section>
//   );
// }
// src/components/WorkExp.jsx
import { motion } from "framer-motion";

import galgotiasLogo from "../assets/galgotias.png";
import oasisLogo from "../assets/oasis.png";
import zidioLogo from "../assets/zidio.png";

/* -------------------------
   Motion Variants
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

const staggerContainer = (staggerChildren = 0.15) => ({
  hidden: {},
  show: { transition: { staggerChildren } },
});

/* -------------------------
   Styles
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
    skills: ["React", "Tailwind", "Motion", "Lucide", "Firebase"],
    desc:
      "Assisted in designing, developing, and maintaining responsive web applications. Worked on UI/UX, database integration, and APIs while collaborating to troubleshoot, optimize performance, and implement features.",
  },
  {
    company: "Galgotias University",
    role: "Campus Ambassador Intern",
    period: "June 2025 - Present",
    logo: galgotiasLogo,
    skills: ["Leadership", "Mentor", "Communication", "Networking"],
    desc:
      "Promoted events and initiatives, engaged with students, and collected feedback — building strong skills in communication, leadership, and brand representation.",
  },
  {
    company: "Oasis Infobyte",
    role: "Web Developer / Designing Intern",
    period: "June 2025 – Aug 2025",
    logo: oasisLogo,
    skills: ["HTML", "CSS", "JavaScript", "Designing"],
    desc:
      "Worked on full-stack web projects, sharpening my skills in HTML, CSS, JavaScript, and responsive design. Designed clean, user-friendly interfaces and applied real-world development practices.",
  },
];

/* -------------------------
   Card Component
   ------------------------- */
const ExpCard = ({ index, company, role, period, logo, skills, desc }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.8)}
    whileHover={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="relative w-full sm:w-[320px] md:w-[360px] flex"
  >
    <div
      className="relative rounded-2xl p-6 pt-14 flex flex-col justify-between
        min-h-[420px] w-full
        bg-gradient-to-b from-[#1f0738] to-[#2b0f3f]
        shadow-[0_10px_30px_rgba(59,0,80,0.45)]
        hover:shadow-[0_18px_45px_rgba(168,85,247,0.65)]
        transition-all duration-300 ease-out border border-purple-900/30"
    >
      {/* Logo badge */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
        <img src={logo} alt={company} className="w-14 h-14 object-contain" />
      </div>

      {/* Top content */}
      <div>
        <h3 className="text-center text-[20px] font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {company}
        </h3>
        <p className="text-purple-300 text-center text-sm">{role}</p>
        <p className="text-gray-400 text-center text-xs mb-4">{period}</p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {skills.map((s, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-xs text-white shadow-sm"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-6 text-center">{desc}</p>
    </div>
  </motion.div>
);

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
      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} uppercase`}>My Work</p>
        <h2 className="mt-3 text-[54px] leading-[1] font-extrabold">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>
      </motion.div>

      {/* Description */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="w-full flex justify-center">
        <p className="mt-6 text-gray-300 text-[17px] max-w-3xl leading-[30px] text-center">
          These roles showcase my growth as a developer and collaborator — building apps, improving
          UX, and contributing across the full development lifecycle.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="mt-14 flex flex-wrap gap-8 justify-center">
        {experiences.map((exp, i) => (
          <ExpCard key={i} index={i} {...exp} />
        ))}
      </div>
    </motion.section>
  );
}
