import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Excelon from "../assets/Excelon.png";
import github from "../assets/github.png";
import Greenix from "../assets/greenixlogo1.png";
import Portfolio from "../assets/portfolio.png";
const styles = {
  padding: "px-4 sm:px-16 py-12",
  sectionSubText: "text-gray-400 text-sm tracking-widest",
};
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

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-transparent`}
      >
        <span className="hash-span" id={idName} />
        <Component />
      </motion.section>
    );
  };

/* Replace with your real project data + your photos in public/images */
const projects = [
  {
    name: "Greenix",
    description:
      "A gamified education platform for schools & colleges where students learn, play, and grow eco-smart. Play exciting games like Space Battle and Water Saviour, and get guidance from your personalized Eco Bot to boost your environmental knowledge in a fun way!",
    tags: [
      { name: "react", color: "text-[#7dd3fc]" },
      { name: "firebase", color: "text-[#c084fc]" },
      { name: "tailwind", color: "text-[#60a5fa]" },
      { name: "Botpress", color: "text-[#c084fc]" },
      { name: "workflow", color: "text-[#60a5fa]" },
      { name: "react-router", color: "text-[#7dd3fc]" },
        { name: "motion", color: "text-[#60a5fa]" },
    ],
    image: Greenix,
    source_code_link: "https://github.com/your-repo/car-rent",
  },
  {
    name: "Excelon",
    description:
      "Upload your Excel files and watch raw numbers transform into beautiful, interactive charts and dashboards—all in seconds. No complex setup, no steep learning curve—just clean visuals that help you analyze smarter, discover patterns, and make data-driven decisions effortlessly.",
    tags: [
      { name: "react", color: "text-[#7dd3fc]" },
      { name: "Taiwind", color: "text-[#fbcfe8]" },
      { name: "Charts.js", color: "text-[#fda4af]" },
       { name: "Motion", color: "text-[#fbcfe8]" },
        { name: "firebase", color: "text-[#7dd3fc]" },
    ],
    image: Excelon,
    source_code_link: "https://github.com/areebkhan205/Excel-Analysis",
  },
  {
    name: "Bat Cave",
    description:
      " A collection of the work I’ve created, showcasing my skills in web development, design, and problem-solving. From interactive apps to gamified learning platforms, each project reflects my passion for building engaging, meaningful, and user-friendly digital experiences.",
    tags: [
       { name: "react", color: "text-[#7dd3fc]" },
      { name: "Taiwind", color: "text-[#fbcfe8]" },
      { name: "React-Bits", color: "text-[#fda4af]" },
       { name: "Motion", color: "text-[#fbcfe8]" },
        { name: "React-Router", color: "text-[#7dd3fc]" },
          { name: "Figma", color: "text-[#fbcfe8]" },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/areebkhan205/Personal_portfolio",
  },
];

/* Project Card matching screenshot look */
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full sm:w-[320px] md:w-[360px]"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        scale={1.02}
        transitionSpeed={400}
        glareEnable={false}
        className="w-full"
      >
        {/* outer gradient card */}
        <div
          className="relative rounded-2xl p-5 pb-6
            bg-gradient-to-b from-[#1f0738] to-[#2b0f3f]
            border border-transparent
            shadow-[0_10px_30px_rgba(59,0,80,0.45)]
            hover:shadow-[0_18px_45px_rgba(59,0,80,0.55)]
            transition-shadow duration-300 ease-out"
        >
          {/* inner white "screenshot window" */}
          <div className="relative w-full h-[180px] rounded-xl bg-white overflow-hidden shadow-inner">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />

            {/* tiny round github button top-right */}
            <div className="absolute top-3 right-3">
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-10 h-10 rounded-full bg-black/75 flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Open source"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </div>

          {/* project title + desc */}
          <div className="mt-5">
            <h3 className="text-white text-[22px] font-extrabold leading-tight">
              {name}
            </h3>
            <p className="mt-3 text-gray-300 text-sm leading-6">
              {description}
            </p>
          </div>

          {/* tags row */}
          <div className="mt-5 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-xs ${tag.color} bg-white/5 px-2 py-1 rounded-lg`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

/* Works section — with large heading style matching screenshot */
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} uppercase`}>My Work</p>

        {/* big chunky heading (like the video screenshot) */}
        <h2 className="mt-3 text-[54px] leading-[1] font-extrabold text-white">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* cards grid — centered like the screenshot */}
      <div className="mt-14 flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
