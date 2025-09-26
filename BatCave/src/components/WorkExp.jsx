// src/components/WorkExp.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import battt from "../assets/battts.png";
import globe from "../assets/globe.png"; // 🌍 globe asset

// Logos
import galgotiasLogo from "../assets/galgotias.png";
import oasisLogo from "../assets/oasis.png";
import zidioLogo from "../assets/zidio.png";

function WorkExp() {
  const cardHover = {
    whileHover: { scale: 1.03 },
    transition: { ease: "easeInOut", duration: 0.18 },
  };

  const desktopLineRef = useRef(null);
  const desktopInView = useInView(desktopLineRef, { once: true, margin: "-100px" });
  const mobileLineRef = useRef(null);
  const mobileInView = useInView(mobileLineRef, { once: true, margin: "-100px" });

  // Globe at top edge of card
  const GlobeDecor = () => (
    <img
      src={globe}
      alt=""
      aria-hidden="true"
      className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                 w-24 md:w-32 pointer-events-none"
    />
  );

  // Logo marker with bigger logos for Zidio + Galgotias
  const LogoMarker = ({ src, alt, company }) => {
    const logoSize =
      company === "zidio" || company === "galgotias"
        ? "w-18 h-18 md:w-20 md:h-20"
        : "w-14 h-14 md:w-16 md:h-16";

    return (
      <div className="w-20 h-20 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white">
        <img src={src} alt={alt} className={`${logoSize} object-contain`} />
      </div>
    );
  };

  return (
    <>
      <section
        id="work-experience"
        className="relative bottom-[8px] top-[100px] section-container px-4 md:px-8"
      >
        <h2 className="section-heading gradient-text font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl mb-[1rem] md:mb-[-3rem] text-center">
          Work Experience
        </h2>

        <div id="scroll" className="relative top-[88px] min-h-[800px]">
          {/* Desktop timeline line */}
          <motion.div
            ref={desktopLineRef}
            className="timeline-line hidden md:block absolute top-[74px] left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-[95%]"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: desktopInView ? 1 : 0 }}
            transition={{ duration: 2.8, ease: "easeOut" }}
          />

          {/* Mobile timeline line */}
          <motion.div
            ref={mobileLineRef}
            className="timeline-line-mobile md:hidden absolute left-4 top-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-auto"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: mobileInView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="pop-up-card space-y-8 md:space-y-16 relative">
            {/* ---------------- Zidio Development ---------------- */}
            <article className="flex items-center w-full flex-col md:flex-row">
              <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 z-20">
                <LogoMarker src={zidioLogo} alt="Zidio Development" company="zidio" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] pl-12 md:mr-auto md:pl-16">
                <motion.div
                  className="relative card space-y-3 shadow-2xl border-2 border-purple-900/30 
                             hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.7)] 
                             transition-all duration-300 p-4 md:p-6 overflow-visible"
                  {...cardHover}
                  whileHover={{ scale: 1.03 }}
                >
                  <GlobeDecor />

                  {/* 🦇 Bats */}
                  <motion.img
                    src={battt}
                    alt="bat-left-zidio"
                    className="absolute top-2 left-2 h-8 w-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  />
                  <motion.img
                    src={battt}
                    alt="bat-right-zidio"
                    className="absolute top-2 right-2 h-8 w-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />

                  <h3 className="text-2xl md:text-3xl font-bold gradient-text 
                                 bg-gradient-to-r from-purple-500 to-pink-500 
                                 bg-clip-text text-transparent">
                    ZIDIO DEVELOPMENT
                  </h3>
                  <p className="text-lg md:text-xl text-purple-300">
                    Web Developer & Designer Intern
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">Aug 2025 - Sep 2025</p>

                  <div className="flex flex-row flex-wrap font-poppins justify-center gap-4">
                    <button className="px-3 py-1 rounded-2xl 
                                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      React
                    </button>
                    <button className="px-3 py-1 rounded-2xl 
                                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Tailwind
                    </button>
                    <button className="px-3 py-1 rounded-2xl 
                                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Motion
                    </button>
                    <button className="px-3 py-1 rounded-2xl 
                                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      lucide
                    </button>
                    <button className="px-3 py-1 rounded-2xl 
                                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Firebase
                    </button>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    Assisted in designing, developing, and maintaining responsive web
                    applications using modern front-end and back-end technologies.
                    Worked on UI/UX design, database integration, and API development
                    to deliver seamless user experiences.
                    <br />
                    <br />
                    Collaborated with the team to troubleshoot issues, optimize
                    performance, and implement new features while gaining hands-on
                    experience in the full development lifecycle.
                  </p>
                </motion.div>
              </div>
            </article>

            {/* ---------------- Galgotias University ---------------- */}
            <article className="flex items-center w-full flex-col md:flex-row">
              <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 z-20">
                <LogoMarker src={galgotiasLogo} alt="Galgotias University" company="galgotias" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] pl-12 md:pl-0 md:ml-auto md:pr-16">
                <motion.div
                  className="relative card space-y-3 shadow-2xl border-2 border-purple-900/30 
                             hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.7)] 
                             transition-all duration-300 p-4 md:p-6 overflow-visible"
                  {...cardHover}
                >
                  <GlobeDecor />

                  <h3 className="text-2xl md:text-3xl font-bold gradient-text 
                                 bg-gradient-to-r from-purple-500 to-pink-500 
                                 bg-clip-text text-transparent">
                    GALGOTIAS UNIVERSITY
                  </h3>
                  <p className="text-lg md:text-xl text-purple-300">Campus Ambassador Intern</p>
                  <p className="text-xs md:text-sm text-gray-400">June 2025 - Present</p>

                  <div className="flex flex-row flex-wrap font-poppins justify-center gap-4">
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Leadership
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Mentor
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Communication
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Networking
                    </button>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    Currently working as a paid Campus Ambassador Intern at Galgotias
                    University. I promote events and initiatives, engage with students,
                    and collect feedback — building strong skills in communication,
                    leadership, and brand representation.
                  </p>
                </motion.div>
              </div>
            </article>

            {/* ---------------- Oasis Infobyte ---------------- */}
            <article className="flex items-center w-full md:flex-row-reverse flex-col">
              <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 z-20">
                <LogoMarker src={oasisLogo} alt="Oasis Infobyte" company="oasis" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] pl-12 md:mr-auto md:pl-16">
                <motion.div
                  className="relative card space-y-3 shadow-2xl border-2 border-purple-900/30 
                             hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.7)] 
                             transition-all duration-300 p-4 md:p-6 overflow-visible"
                  {...cardHover}
                >
                  <GlobeDecor />

                  <h3 className="text-2xl md:text-3xl font-bold gradient-text 
                                 bg-gradient-to-r from-purple-500 to-pink-500 
                                 bg-clip-text text-transparent">
                    OASIS INFOBYTE
                  </h3>
                  <p className="text-lg md:text-xl text-purple-300">
                    Web Developer / Designing Intern
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">June 2025 – Aug 2025</p>

                  <div className="flex flex-row flex-wrap font-poppins justify-center gap-4">
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      HTML
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      CSS
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      JavaScript
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Designing
                    </button>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    Worked on full-stack web projects, sharpening my skills in HTML,
                    CSS, JavaScript, and responsive design. Designed clean, user-friendly
                    interfaces and applied real-world development practices — boosting
                    my technical confidence for future industry projects.
                  </p>
                </motion.div>
              </div>
            </article>

            {/* ---------------- Galgotias University - G-Post ---------------- */}
            <article className="flex items-center w-full flex-col md:flex-row">
              <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 z-20">
                <LogoMarker src={galgotiasLogo} alt="Galgotias University" company="galgotias" />
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] pl-12 md:pl-0 md:ml-auto md:pr-16">
                <motion.div
                  className="relative card space-y-3 shadow-2xl border-2 border-purple-900/30 
                             hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.7)] 
                             transition-all duration-300 p-4 md:p-6 overflow-visible"
                  {...cardHover}
                >
                  <GlobeDecor />

                  <h3 className="text-2xl md:text-3xl font-bold gradient-text 
                                 bg-gradient-to-r from-purple-500 to-pink-500 
                                 bg-clip-text text-transparent">
                    GALGOTIAS UNIVERSITY
                  </h3>
                  <p className="text-lg md:text-xl text-purple-300">
                    Senior Member — G-Post Magazine Society
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">Aug 2023 – Jan 2025</p>

                  <div className="flex flex-row flex-wrap font-poppins justify-center gap-4">
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Communication
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Public Speaking
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Magazine Designing
                    </button>
                    <button className="px-3 py-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-sm">
                      Journalism
                    </button>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 mb-4">
                    We’re the college’s magazine and reporting club where creativity
                    meets curiosity. From interviews and reports to designing vibrant
                    magazines, we capture campus life and share stories that connect,
                    inform, and inspire.
                  </p>
                </motion.div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkExp;
